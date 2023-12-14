import { useState } from 'react';
import './signin.css';
import  pathPhoto  from './../images/girl.jpg';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/authApi';
import { setCookies } from '../helpers/setCookies';
import { jwtParseToken } from '../helpers/jwtParseToken';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

export const Signin = () => {

  const [isValid, setIsValid] = useState(true);
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submitted, isSumbitted] = useState(false);

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

 


  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if(submitted){
        try {
          const token = await login({userEmail: input.email, userPassword: input.password}).unwrap();

          setCookies("API_TOKEN", token, 1);

          const userData = jwtParseToken();
          dispatch(setUser(userData));

          navigate('/');
        }
        catch {

        }
    }

    console.log('Електронна пошта вірна:', input.email);
  };

    return(
        <div>
            <section className="vh-100" style={{backgroundColor: 'whitesmoke'}}>
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                      <div className="card" style={{borderRadius: '1rem'}}>
                        <div className="row g-0">
                          <div className="col-md-6 col-lg-5 d-none d-md-block">
                            <img src= {pathPhoto} height="500px"
                              alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                          </div>
                          <div className="col-md-6 col-lg-7 d-flex align-items-center">
                            <div className="card-body p-4 p-lg-5 text-black">
              
                              <form onSubmit={handleLogin} className={isValid ? '' : 'was-validated'}>
              
                                <div className="d-flex align-items-center mb-3 pb-1">
                                  <span className="h1 fw-bold mb-0">Tofu</span>
                                </div>
              
                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              
                                <div className="form-outline mb-4">
                                  <input type="email" id="emailInput" className="form-control form-control-lg"
                                  value={input.email}
                                  onChange={(e) => setInput({
                                    ...input,
                                    email: e.target.value,})}
                                  required />
                                  <label className="form-label" >Email address</label>
                                  <div className="invalid-feedback">Будь ласка, введіть коректну електронну пошту.</div>
                                </div>
                                <div className="form-outline mb-4">
                                  <input type="password" id="passwordInput" className="form-control form-control-lg"
                                  value={input.password}
                                  onChange={(e) => setInput({
                                    ...input,
                                    password: e.target.value,})}
                                  required />
                                  <label className="form-label" >Password</label>
                                  <div className="invalid-feedback">Будь ласка, введіть пароль.</div>
                                </div>
              
                                <div className="pt-1 mb-4">
                                  <button className="btn btn-dark btn-lg btn-block" id="loginButton" type='submit' onClick={()=>isSumbitted(true)}>Login</button>
                                </div>
              
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/register"
                                    style={{color: 'blue'}}>Register here</a></p>
                                <a href="#!" className="small text-muted">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                              </form>
              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container">
               
              </div>
              </div>
    );
}