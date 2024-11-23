import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { car, listComment } from '../../data'


import ProfileCircleIcon from '../../icons/detailPage/ProfileCircleIcon'
import StarFullIcon from '../../icons/detailPage/StarFullIcon'
import StarEmptyIcon from '../../icons/detailPage/StarEmptyIcon'

import './style.css'

const getRating = {
    1: <div className='rating'>
    <StarFullIcon />
    <StarEmptyIcon />
    <StarEmptyIcon />
    <StarEmptyIcon />
    <StarEmptyIcon />
    </div>,
    2: <div className='rating'>
    <StarFullIcon />
    <StarFullIcon />
    <StarEmptyIcon />
    <StarEmptyIcon />
    <StarEmptyIcon />
    </div>,
    3: <div className='rating'>
    <StarFullIcon />
    <StarFullIcon />
    <StarFullIcon />
    <StarEmptyIcon />
    <StarEmptyIcon />
    </div>,
    4: <div className='rating'>
    <StarFullIcon />
    <StarFullIcon />
    <StarFullIcon />
    <StarFullIcon />
    <StarEmptyIcon />
    </div>,
    5: <div className='rating'>
    <StarFullIcon />
    <StarFullIcon />
    <StarFullIcon />
    <StarFullIcon />
    <StarFullIcon />
    </div>,
}

const DetailPage = () => {
    const navigate = useNavigate()
    return (
        <div className='detailPage'>
            <section className='section1'>
                <div className='grImg'>
                    <div className='main'>
                        <img src={car.imgDetail1} alt="" />
                    </div>
                    <div className='more'>
                        <img src={car.imgDetail1} alt="" />
                        <img src={car.imgDetail2} alt="" />
                        <img src={car.imgDetail3} alt="" />
                        <img src={car.imgDetail4} alt="" />
                    </div>
                </div>
                <div className='grInfo'>
                    <h2 className='brandAndName'>{car.brand} {car.name}</h2>
                    <p className='introduce'>{car.introduce}</p>
                    <div className='grSpecification'>
                        <div className='specification typeCar'>
                            <p>Type Car</p>
                            <h5>{car.type}</h5>
                        </div>
                        <div className='specification seats'>
                            <p>Seats</p>
                            <h5>{car.seats} People</h5>
                        </div>
                        <div className='specification fuelType'>
                            <p>Fuel Type</p>
                            <h5>{car.fuelType}</h5>
                        </div>
                        <div className='specification capacity'>
                            <p>Capacity</p>
                            <h5>{car.capacity}</h5>
                        </div>
                    </div>
                    <div className='priceAndRent'>
                        <div className='pricePerDay'>
                            <h4>${car.pricePerDay}.00/</h4>
                            <p>day</p>
                        </div>
                        <h5 className='rentNow' onClick={() => navigate('/payment')}>Rent Now</h5>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <h3>Comment List</h3>
                <div className='grComment'>
                    {listComment.map((comment) => {
                        return <div className='comment'>
                            <div className='row'>
                                <div className='customer'>
                                    <ProfileCircleIcon />
                                    <h4 className='name'>{comment.name}</h4>
                                </div>
                                <div className='timeAndRating'>
                                    <p className='commentedAt'>{comment.commentedAt}</p>
                                    {getRating[comment.rating]}
                                </div>
                            </div>
                            <p>{comment.comment}</p>
                        </div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default DetailPage