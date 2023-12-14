import  pathPhoto  from './../images/boy.png';
import { useState } from 'react';
import './registerpage.css'
import 'bootstrap/dist/css/bootstrap.css';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../services/authApi';

export const RegisterPage = () => {

    const [input, setInput] = useState({
        email: '',
        password: '',
        numberPhone: '',
        firstName: '',
        lastName: ''
      })
    
  
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const isValidPassword = () => {
    if(submitted){

        if(!validator.isStrongPassword(input.password)) {
            return false;
        }
        return true;
    }
    return true;
  }

  const isValidEmail = () => {
    if(submitted){

        if(!validator.isEmail(input.email)) {
            return false;
        }
        return true;
    }
    return true;
  }

  const isValidName = (name: string): boolean => {
    if(submitted){

        if(name.length < 2) {
            return false;
        }
        return true;
    }
    return true;
  }

  const isValidPhoneNumber = ()=> {
    if(submitted){

        if(!validator.isMobilePhone(input.numberPhone)) {
            return false;
        }
        return true;
    }
    return true;
  }


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if ( !isValidEmail ) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      try {
          await register({userEmail: input.email, userPassword: input.password, name: input.firstName, surname: input.lastName, phoneNumber: input.numberPhone})
          navigate('/signIn')
      }
      catch {
        console.log("pohano")
      }
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
                                <form className={submitted ? 'was-validated' : ''} onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example1" className={isValidName(input.firstName) ? "form-control" : "form-control is-invalid"}
                                                value={input.firstName}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    firstName: e.target.value,})}
                                                required />
                                                <label className="form-label" >First name</label>
                                                <div className="invalid-feedback">Будь ласка, введіть коректне ім'я.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example2" className={ isValidName(input.lastName) ? "form-control" : "form-control is-invalid"}
                                                value={input.lastName}
                                                onChange={(e) => setInput({
                                                    ...input,
                                                    lastName: e.target.value,})}
                                                required />
                                                <label className="form-label" >Last name</label>
                                                <div className="invalid-feedback">Будь ласка, введіть коректне прізвище.</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className={isValidEmail() ? "form-control" : "form-control is-invalid"}
                                        value={input.email}
                                        onChange={(e) => setInput({
                                            ...input,
                                            email: e.target.value,})}
                                        required/>
                                        <label className="form-label" >Email address</label>
                                        <div className="invalid-feedback">Будь ласка, введіть коректну електронну пошту.</div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="phone" className={isValidPhoneNumber() ? "form-control" : "form-control is-invalid"} data-mdb-input-mask="+48 999-999-999" 
                                        value={input.numberPhone}
                                        onChange={(e) => setInput({
                                            ...input,
                                            numberPhone: e.target.value,})}
                                        required/>
                                        <label className="form-label" >Phone number with country code</label>
                                     <div className='invalid-feedback'>Будь ласка, введіть коректний номер телефону.</div>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className={isValidPassword() ? "form-control" : "form-control is-invalid"}
                                        value={input.password}
                                        onChange={(e) => setInput({
                                            ...input,
                                            password: e.target.value,})}
                                        required />
                                        <label className="form-label">Password</label>
                                        <div className="invalid-feedback">Будь ласка, введіть складніший пароль.</div>
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={() => setSubmitted(true)}>
                                        Sign up
                                    </button>

                                    <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Do you have account? <a href="/signIn"
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