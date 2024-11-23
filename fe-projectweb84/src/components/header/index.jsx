import { NavLink, Link, useNavigate } from 'react-router-dom'

import LogoWhite from '/public/imgs/logoWhite.png'
import LogoBlack from '/public/imgs/logoBlack.png'

import './style.css'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className='gr gr1'>
                <p>Introduce</p>
                <p>Policy</p>
            </div>
            <div className='gr gr2'>
                <h4>Safe-Convenient-Diverse</h4>
                <img src={LogoWhite} alt="" onClick={() => navigate('/')} className='logoWhite'/>
                <img src={LogoBlack} alt="" onClick={() => navigate('/')} className='logoBlack'/>
                <h4>Enhance The Experience</h4>
            </div>
            <div className='gr gr3'>
                <h5 onClick={() => navigate('/login')}>Login</h5>
                <div style={{width:'1px', height:'15px', margin:'0 10px'}} className='partition'></div>
                <h5 onClick={() => navigate('/register')}>Register</h5>
            </div>
        </div>
    )
}

export default Header