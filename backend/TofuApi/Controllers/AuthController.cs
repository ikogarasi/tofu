using TofuApi.dto;
using TofuApi.Infrastructure;
using TofuApi.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace TofuApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public AuthController(IConfiguration configuration, ApplicationDbContext context) 
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost("Register")]
        [ProducesResponseType(typeof(void), 200)]
        public async Task<ActionResult> Register([FromBody] RegisterDto request)
        {
            CreatePasswordHash(request.UserPassword, out byte[] passwordHash, out byte[] passwordSalt);

            var user = new User()
            {
                UserEmail = request.UserEmail,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Surname = request.Surname,
                Name = request.Name,
                PhoneNumber = request.PhoneNumber,
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("Login")]
        [ProducesResponseType(typeof(string), 200)]
        public async Task<ActionResult<string>> Login([FromBody] LoginDto request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(i => i.UserEmail == request.UserEmail);

            if (user == null)
            {
                return BadRequest("User doesn`t exist");
            }

            if(!VerifyPasswordHash(request.UserPassword, user.PasswordSalt, user.PasswordHash ))
            {
                return BadRequest("wrong password");
            }

            string token = CreateToken(user);
            return Ok(token);
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserEmail)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using( var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            }
        }

        private static bool VerifyPasswordHash(string password, byte[] passwordSalt, byte[] passwordHash)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computeHash.SequenceEqual(passwordHash);
            } 
        }
    }
}
