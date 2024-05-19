
const ProductCard = ({ item }) => {
    const { name, image, details, price } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <p className="absolute right-0 mt-8 mr-8 text-[#CE054D] text-xl font-semibold">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;