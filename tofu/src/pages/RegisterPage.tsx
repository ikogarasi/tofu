import  pathPhoto  from './../images/boy.png';
import { useState } from 'react';
import './registerpage.css'
import 'bootstrap/dist/css/bootstrap.css';

export const RegisterPage = () => {
    
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

    if (!validateEmail(email) && !password && password.length < 8) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    // Логіка для випадку правильно введеної електронної пошти
    console.log('Електронна пошта вірна:', email);
  };
    return(
     <><div>
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
                                    <a className="nav-link " aria-current="page" href="#">Home</a>
                                </li>
                                <li className="header-link nav-item">
                                    <a className=" nav-link" href="#">Carriers</a>
                                </li>
                                <li className="header-link nav-item">
                                    <a className="nav-link" href="#">Book tickets</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container py-4">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card-boy card cascading-right">
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example1" className="form-control" />
                                                <label className="form-label" >First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example2" className="form-control" />
                                                <label className="form-label" >Last name</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control" />
                                        <label className="form-label" >Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="phone" className="form-control" data-mdb-input-mask="+48 999-999-999" />
                                        <label className="form-label" >Phone number with country code</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className="form-control" />
                                        <label className="form-label">Password</label>
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>

                                    <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Do you have account? <a href="#!"
                                        style={{color: 'blue'}}>Sign in here</a></p>
                                    <a href="#!" className="small text-muted">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 d-none d-md-block">
                        <img src={pathPhoto} className="w-100 rounded-4 shadow-4"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
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
            </div></>
    );
}