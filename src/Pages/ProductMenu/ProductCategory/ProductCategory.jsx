import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import ShowPopularItem from "../../Home/PopularItem/ShowPopularItem";

const ProductCategory = ({ items, title, img }) => {
    return (
        <div className="my-10">
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-5 max-w-screen-xl mx-auto mt-5'>
                {
                    items.map(item => <ShowPopularItem
                        key={item._id}
                        item={item}
                    ></ShowPopularItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="bg-[#7B7B7B] mt-8 px-10 py-3 text-white hover:bg-slate-400 hover:text-black rounded-3xl border-b-[#AC7C01] border-b-4">Order Your Product</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCategory;