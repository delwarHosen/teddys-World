
const ShowPopularItem = ({ item }) => {
    const { name, image, details, price } = item
    return (
        <>
            <div className='flex gap-x-2 border p-2'>
                <img style={{ borderRadius: "0 50px 50px 50px" }} className='w-[114px] h-[120px]' src={image} alt="img1" />
                <div>
                    <h5 className='text-xl uppercase font-bold'>{name}</h5>
                    <p>{details}</p>
                </div>
                <p className='text-xl font-semibold text-[#CE054D]'>${price}</p>
            </div>
        </>
    );
};

export default ShowPopularItem;