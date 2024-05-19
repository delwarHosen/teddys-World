import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Testomonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-10'>
            <SectionTitle
                subHeading="What our client say"
                heading='Reviews'
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-screen-xl">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='px-16'>
                            <Rating
                            className='mx-auto'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='mt-3'>{review.details}</p>
                            <h3 className='text-xl text-center mt-5'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testomonial;