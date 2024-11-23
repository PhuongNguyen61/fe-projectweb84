import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Background from '/public/imgs/loginAndRegister/background.png'

import ArrowRightIcon from '../../icons/loginAndRegister/ArrowRightIcon'

import './style.css'

const RegisterPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className='registerPage'>
            <img src={Background} alt="" className='background'/>
            <div className='overlay'>
                <div className='content'>
                    <h1>Register</h1>
                    <form className='registerForm'>
                        <div className='row'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder='Please fill in your email'
                            name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder='Please fill in your username'
                            name="username" value={formData.username} onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder='Please enter your password'
                            name="password" value={formData.password} onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" placeholder='Please re-enter your password'
                            name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                        </div>
                        <button type='submit'>Register</button>
                    </form>
                    <div className='groupRedirectToLogin'>
                        <p>Already have an account?</p>
                        <div className='redirectToLogin' onClick={() => {navigate('/login')}}>
                            <p>Login</p>
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage