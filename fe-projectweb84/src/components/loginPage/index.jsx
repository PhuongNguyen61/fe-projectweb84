import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Background from '/public/imgs/loginAndRegister/background.png'

import ArrowRightIcon from '../../icons/loginAndRegister/ArrowRightIcon'

import './style.css'

const LoginPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        emailOrUsername: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className='loginPage'>
            <img src={Background} alt="" className='background'/>
            <div className='overlay'>
                <div className='content'>
                    <h1>Login</h1>
                    <form className='loginForm'>
                        <div className='row'>
                            <label htmlFor="emailOrUsername">Email or Username</label>
                            <input type="text" id="emailOrUsername" placeholder='Please fill in your email or username'
                            name="email" value={formData.emailOrUsername} onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder='Please enter your password'
                            name="password" value={formData.password} onChange={handleChange}/>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                    <div className='groupRedirectToRegister'>
                        <p>Don't have an account yet?</p>
                        <div className='redirectToRegister' onClick={() => {navigate('/register')}}>
                            <p>Register</p>
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage