import { useNavigate } from 'react-router-dom'

import { listCar } from '../../data'

import CapacityIcon from '../../icons/categoryPage/CapacityIcon'
import FuelTypeIcon from '../../icons/categoryPage/FuelTypeIcon'
import SeatsIcon from '../../icons/categoryPage/SeatsIcon'

import './style.css'

const CategoryPage = () => {
    const navigate = useNavigate()
    return (
        <div className='categoryPage'>
            <div className='left'>
                <h4>TYPE</h4>
                <form className='grFilter'>
                    <div className='row'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">HatchBack</label>
                    </div>
                    <div className='row'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Sedan</label>
                    </div>
                    <div className='row'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">SUV</label>
                    </div>
                    <div className='row'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">CUV</label>
                    </div>
                    <div className='row'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">MVP</label>
                    </div>
                    <div className='row'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Coupe</label>
                    </div>
                </form>
            </div>
            <div className='right'>
                {listCar.map((car, idx) => {
                    return <div className='car' key={idx}>
                        <h4 className='brandAndName'>{car.brand} {car.name}</h4>
                        <p className='type'>{car.type}</p>
                        <img src={car.imgCategory} alt="" />
                        <div className='grSpecification'>
                            <div className='specification fuelType'>
                                <FuelTypeIcon/>
                                <p>{car.fuelType}</p>
                            </div>
                            <div className='specification capacity'>
                                <CapacityIcon/>
                                <p>{car.capacity}</p>
                            </div>
                            <div className='specification seats'>
                                <SeatsIcon/>
                                <p>{car.seats} People</p>
                            </div>
                        </div>
                        <div className='priceAndRent'>
                            <div className='pricePerDay'>
                                <h4>${car.pricePerDay}.00/</h4>
                                <p>day</p>
                            </div>
                            <h5 className='rentNow' onClick={() => navigate('/detail')}>Detail</h5>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default CategoryPage