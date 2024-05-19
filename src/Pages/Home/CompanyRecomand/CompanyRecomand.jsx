import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import recomandImage from '../../../assets/companyRecomand/teddy11.jpg'
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
                    <div className="card w-[340px] bg-[#D9D9D9] shadow-sm">
                        <figure className="px-2 pt-2">
                            <img src={recomandImage2} alt="img" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Fuzzy Bear</h2>
                            <p>Teddy bears are cherished companions that boost imaginative play in children.</p>
                            <div className="card-actions">
                                <button className="bg-black px-10 py-3 mt-2 hover:bg-slate-400 text-white font-semibold hover:text-black rounded-2xl border-b-[#AC7C01] border-b-4">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[340px] bg-[#D9D9D9] shadow-sm">
                        <figure className="px-2 pt-2">
                            <img src={recomandImage1} alt="img" className="w-full h-[310px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Teddy Ashraf</h2>
                            <p>Teddy bears are cherished companions that boost imaginative play in children.</p>
                            <div className="card-actions">
                                <button className="bg-black px-10 py-3 mt-2 hover:bg-slate-400 text-white font-semibold hover:text-black rounded-2xl border-b-[#AC7C01] border-b-4">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[340px] bg-[#D9D9D9] shadow-sm">
                        <figure className="px-2 pt-2">
                            <img src={recomandImage} alt="img" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Fuzzy Bear</h2>
                            <p>Teddy bears are cherished companions that boost imaginative play in children.</p>
                            <div className="card-actions">
                                <button className="bg-black px-10 py-3 mt-2 hover:bg-slate-400 text-white font-semibold hover:text-black rounded-2xl border-b-[#AC7C01] border-b-4">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyRecomand;