import  pathPhoto  from './../images/boy.png';
import { useState } from 'react';
import './registerpage.css'
import 'bootstrap/dist/css/bootstrap.css';
import validator from 'validator';

export const RegisterPage = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const isValidPhoneNumber = validator.isMobilePhone(numberPhone);
  const isValidPassword = validator.isStrongPassword(password);

  const isValidName = (name: string): boolean => {
    if(name.length < 2) {
        return false;
    }
    return true;
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    const isValidEmail = validator.isEmail(email);
    if ( !isValidEmail) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
  };

    return(
     <><div>

            <div className="container py-4">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card-boy card cascading-right">
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form onSubmit={handleSubmit} className={submitted && isValid ? 'was-validated' : ''}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example1" className={isValidName(firstName) ? "form-control is-valid" : "form-control is-invalid"}
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required />
                                                <label className="form-label" >First name</label>
                                                <div className="invalid-feedback">Будь ласка, введіть коректну електронну пошту.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example2" className={ isValidName(lastName) ? "form-control is-valid" : "form-control is-invalid"}
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required />
                                                <label className="form-label" >Last name</label>
                                                <div className="invalid-feedback">Будь ласка, введіть коректну електронну пошту.</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required/>
                                        <label className="form-label" >Email address</label>
                                        <div className="invalid-feedback">Будь ласка, введіть коректну електронну пошту.</div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="phone" className={isValidPhoneNumber ? "form-control is-valid" : "form-control is-invalid"} data-mdb-input-mask="+48 999-999-999" 
                                        value={numberPhone}
                                        onChange={(e) => setNumberPhone(e.target.value)}
                                        required/>
                                        <label className="form-label" >Phone number with country code</label>
                                     <div className='invalid-feedback'>Будь ласка, введіть коректний номер телефону.</div>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className={isValidPassword ? "form-control is-valid" : "form-control is-invalid"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                        <label className="form-label">Password</label>
                                        <div className="invalid-feedback">Будь ласка, введіть складніший пароль.</div>
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={() => setSubmitted(true)}>
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
               
            </div></>
    );
}