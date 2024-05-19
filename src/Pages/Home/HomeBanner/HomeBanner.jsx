import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='homeBanner flex justify-center items-center md:px-28 px-5 md:py-32 py-5 my-16'>
            <div className=' bg-white md:w-2/4 w-full p-8'>
                <h2 className='text-center text-5xl font-semibold'>Taddy Creation</h2>
                <p className='text-center'>A teddy bear is a stuffed toy thats a small, adorable version of an intimidating, furry mammal. The original teddy bear was named after U.S. President Theodore Roosevelt.</p>
            </div>
        </div>
    );
};

export default HomeBanner;