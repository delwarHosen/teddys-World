
const ProductCard = ({ item }) => {
    const { name, image, details, price } = item
    return (
        <div className="card w-[340px] h-[540px] bg-[#D9D9D9] shadow-sm">
            <figure className="p-2">
                <img src={image} alt="Shoes" className="rounded-sm w-full h-[270px]" />
            </figure>
            <p className="absolute right-0 mt-8 mr-8 text-[#CE054D] text-xl font-semibold">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button className="bg-black px-10 py-3 hover:bg-slate-400 text-white font-semibold hover:text-black rounded-2xl border-b-[#AC7C01] border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;