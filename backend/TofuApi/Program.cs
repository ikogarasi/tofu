using TofuApi.Infrastructure;
using Microsoft.EntityFrameworkCore;
using TofuApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config =>
{
    config.Title = "Tofu Api";
});


builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseMySql(builder.Configuration.GetConnectionString("defaultConnection"), new MySqlServerVersion(new Version(8, 0))));
builder.Services.AddScoped<ITicketRepository, TicketRepository>();
builder.Services.AddScoped<ICommentRepository, CommentRepository>();
var app = builder.Build();

app.UseOpenApi();
app.UseSwaggerUi3();

app.UseHttpsRedirection();
app.UseCors(builder => builder.AllowAnyOrigin()
     .AllowAnyMethod()
     .AllowAnyHeader());


app.UseAuthorization();

app.MapControllers();

app.Run();
