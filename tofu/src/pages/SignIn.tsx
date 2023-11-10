import { useState } from 'react';
import './signin.css';
import  pathPhoto  from './../images/girl.jpg';

export const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    // Регулярний вираз для перевірки правильності написання електронної пошти
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    if (!validateEmail(email) && password.length === 0 && password.length > 8) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    console.log('Електронна пошта вірна:', email);
  };

    return(
        <div>
        <header className="bg-image">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand mb-0" style={{fontSize: '30px', fontWeight: 'bold'}} href="#">Tofu</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="header-link nav-item mb-0">
                    <a className=" nav-link " aria-current="page"  href="#">Home</a>
                  </li>
                  <li className="header-link nav-item">
                    <a className=" nav-link" href="#">Carriers</a>
                  </li>
                  <li className="header-link nav-item">
                    <a className=" nav-link" href="#">Book tickets</a>
                  </li>
                </ul>        
              </div>
            </div>
          </nav>
        </header>
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
              
                              <form onSubmit={handleSubmit} className={submitted && isValid ? 'was-validated' : ''}>
              
                                <div className="d-flex align-items-center mb-3 pb-1">
                                  <span className="h1 fw-bold mb-0">Tofu</span>
                                </div>
              
                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              
                                <div className="form-outline mb-4">
                                  <input type="email" id="emailInput" className="form-control form-control-lg"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required />
                                  <label className="form-label" >Email address</label>
                                  <div className="invalid-feedback">Будь ласка, введіть коректну електронну пошту.</div>
                                </div>
                                <div className="form-outline mb-4">
                                  <input type="password" id="passwordInput" className="form-control form-control-lg"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  required />
                                  <label className="form-label" >Password</label>
                                  <div className="invalid-feedback">Будь ласка, введіть пароль.</div>
                                </div>
              
                                <div className="pt-1 mb-4">
                                  <button className="btn btn-dark btn-lg btn-block" id="loginButton" onClick={() => setSubmitted(true)} type="button">Login</button>
                                </div>
              
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!"
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
                <footer className="py-3 my-4">
                  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Carriers</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Book tickets</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                  </ul>
                  <p className="text-center text-muted">© 2023 Tofu Company, Inc</p>
                </footer>
              </div>
              </div>
    );
}