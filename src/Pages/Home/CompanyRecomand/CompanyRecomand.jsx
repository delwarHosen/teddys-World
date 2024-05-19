import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import recomandImage from '../../../assets/companyRecomand/teddy11.png'
import recomandImage1 from '../../../assets/companyRecomand/teddy13.png'
import recomandImage2 from '../../../assets/companyRecomand/teddy14.png'

const CompanyRecomand = () => {
    return (
        <div className='my-[70px]'>
            <SectionTitle
                subHeading="See it"
                heading="Company Recomands"
            ></SectionTitle>
            <div className='flex justify-center'>
                <div className='grid md:grid-cols-3 gap-x-8 gap-y-6'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={recomandImage} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={recomandImage1} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={recomandImage2} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyRecomand;