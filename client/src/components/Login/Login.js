import React, { useState } from 'react';
import Img1 from './img1.jpg';
import './Login.css';
import axios from "axios";
import { SERVER_URL } from '../../EditableStuff/Config';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [ cred, setCred ] = useState({
        username: "",
        password: "",
        rem: true,
    })

    const onLogin = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${SERVER_URL}/signin`,cred,
            { withCredentials: true });
            if(res.status===200){
                navigate('/');
            }
            else{
                
            }
        }catch(err){
            console.log(err);
        }
    }
    
    const handleInput = (e) => {
        setCred({...cred,[e.target.name]:e.target.value})
    }

    const handleCheck = (e) => {
        setCred({...cred,[e.target.name]:e.target.checked})
    }

    return (
        <>
            <div className="login-container">
                <div className="login__content">
                    <img src={Img1} alt="login image" className="login__img" />

                        <form className="login__form" method='POST'>
                            <div>
                                <h1 className="login__title">
                                    <span>Welcome</span> Back!
                                </h1>
                                <p className="login__description">
                                    Welcome! Please login to continue.
                                </p>
                            </div>

                            <div>
                                <div className="login__inputs">
                                    <div>
                                        <label for="" className="login__label">Username/Email</label>
                                        <input type="text" name="username" value={cred.username} onChange={handleInput} placeholder="Enter your username or email address" required className="login__input" />
                                    </div>

                                    <div>
                                        <label for="" className="login__label">Password</label>

                                        <div className="login__box">
                                            <input type="password" name='password' value={cred.password} onChange={handleInput} placeholder="Enter your password" required className="login__input" id="input-pass" />
                                                <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="login__check">
                                    <input type="checkbox" name='rem' checked={cred.rem} onChange={handleCheck} className="login__check-input" />
                                        <label for="" className="login__check-label" >Remember me</label>
                                </div>
                            </div>

                            <div>
                                <div className="login__buttons">
                                    <button onClick={onLogin} className="login__button">Log In</button>
                                    <button className="login__button login__button-ghost">Sign Up</button>
                                </div>

                                <a href="#" className="login__forgot">Forgot Password?</a>
                            </div>
                        </form>
                </div>
            </div>

        </>
    )
}

export default Login