import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import categoryImg1 from '../../../assets/category/bear.png'
import categoryImg2 from '../../../assets/category/bunnies.png'
import categoryImg3 from '../../../assets/category/cat.png'
import categoryImg4 from '../../../assets/category/dall.png'
import categoryImg5 from '../../../assets/category/dog.png'

// import './styles.css';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div>
            <SectionTitle
            subHeading="from 11.00 pm - 10.00pm"
            heading="Order Online"
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:my-[70px]"
            >
                <SwiperSlide>
                    <img className='border-2' src={categoryImg1} alt="categoryImg" />
                    <h2 className='md:text-2xl font-bold text-center -mt-16 text-[#CE054D]'>BEAR</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='border-2' src={categoryImg2} alt="categoryImg" />
                    <h2 className='md:text-2xl font-bold text-center -mt-16 text-[#CE054D]'>BUNNIES</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='border-2' src={categoryImg3} alt="categoryImg" />
                    <h2 className='md:text-2xl font-bold text-center -mt-16 text-[#CE054D]'>DALL</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='border-2' src={categoryImg4} alt="categoryImg" />
                    <h2 className='md:text-2xl font-bold text-center -mt-16 text-[#CE054D]'>DOG</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='border-2' src={categoryImg5} alt="categoryImg" />
                    <h2 className='md:text-2xl font-bold text-center -mt-16 text-[#CE054D]'>CAT</h2>
                </SwiperSlide>
            </Swiper>
            {/* <HomeBanner></HomeBanner> */}
        </div>
    );
};

export default Category;