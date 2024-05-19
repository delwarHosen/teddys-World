import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import featureimg from "../../../assets/featureImg/teddy16.png"
import './Feature.css'
const Feature = () => {
    return (
        <div className='featureBg bg-fixed'>
            <SectionTitle
                subHeading="See It"
                heading="Our Feature"
            ></SectionTitle>
            <div className='md:flex gap-x-[90px] pb-16 px-28'>
                <img src={featureimg} alt="" />
                <div className='text-white'>
                    <p className='my-3'>March 10 , 2024</p>
                    <h4 className='text-xl font-medium my-2'>WHERE CAN I CAN GET  SOME?</h4>
                    <p>Teddy Collection is one of the Latest and leading online gift stores in Bangladesh. We are providing gift delivery service in Bangladesh since 2010. This online gift store was initiated in 2011, which is now serving thousands of our customers worldwide to send gift to their friends and families in Bangladesh</p>
                    <button className="bg-[#7B7B7B] mt-5 px-12 py-3 hover:bg-slate-400 hover:text-black rounded-3xl border-b-[#AC7C01] border-b-4">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
