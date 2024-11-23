import { useNavigate } from 'react-router-dom'

import Img1 from '/public/imgs/homePage/img1.png'
import PopularCar from '/public/imgs/homePage/popularCar.png'
import LuxuryCar from '/public/imgs/homePage/luxuryCar.png'
import SuperCar from '/public/imgs/homePage/superCar.png'
import Img2 from '/public/imgs/homePage/img2.png'

import ComputerIcon from '../../icons/homePage/ComputerIcon'
import CarIcon from '../../icons/homePage/CarIcon'
import PaymentIcon from '../../icons/homePage/PaymentIcon'
import ArrowRightIcon from '../../icons/homePage/ArrowRightIcon'

import './style.css'

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className='homePage'>
            <section className='section1'>
                <img src={Img1} alt="" />
                <div className='overlay'>
                    <div className='content'>
                        <p style={{fontSize:'70px', fontFamily:'Courier New', color:'#FFFFFF'}}>Drive Of Your Life</p>
                        <div className='redirectToCategory'>
                            <h3 onClick={() => navigate('/category')}>Choose the car you like and rent it now</h3>
                            <ArrowRightIcon/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <h1>Our Services</h1>
                <p>Serving the needs of diverse vehicle types</p>
                <div className='classify'>
                    <div className='left'>
                        <div className='gr grPopularCar'>
                            <img src={PopularCar} alt="" />
                            <div className='overlay'></div>
                            <h5>Popular Car</h5>
                        </div>
                        <div className='gr grLuxuryCar'>
                            <img src={LuxuryCar} alt="" />
                            <div className='overlay'></div>
                            <h5>Luxury Car</h5>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='gr grSuperCar'>
                            <img src={SuperCar} alt="" />
                            <div className='overlay'></div>
                            <h5>Super Car</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section3'>
                <h1>How It Works</h1>
                <p>Our car rental process is simple and efficient</p>
                <div className='grProcess'>
                    <div className='left'>
                        <img src={Img2} alt="" />
                    </div>
                    <div className='right'>
                        <div className='process'>
                            <h3>1, Book Via App Or Web</h3>
                            <p>There are many ways to use our services, but you still need an account to do them, please register an account and log in to use our services</p>
                        </div>
                        <div className='process'>
                            <h3>2, Choose Car</h3>
                            <p>Please refer and choose the car that suits your intended use</p>
                        </div>
                        <div className='process'>
                            <h3>3, Select date</h3>
                            <p>Choose a time to pick up and return your car, we have a home delivery and pick up service for you</p>
                        </div>
                        <div className='process'>
                            <h3>4, Pay And Enjoy</h3>
                            <p>Pay and wait to receive the car, we will notify you when we deliver the car</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section4'>
                <h1>Why Choose Us</h1>
                <p>Explore our premium car rental service</p>
                <div className='grReason'>
                    <div className='reason'>
                        <ComputerIcon/>
                        <h3>Rent Online Easily</h3>
                        <p>Renting a car online has never been easier</p>
                    </div>
                    <div className='reason'>
                        <CarIcon/>
                        <h3>Variety Of Car Brands</h3>
                        <p>Diverse brands, rich choices for you</p>
                    </div>
                    <div className='reason'>
                        <PaymentIcon/>
                        <h3>Online Payment</h3>
                        <p>Pay online quickly, easily and securely</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage