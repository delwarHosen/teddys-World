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
        </div>
    );
};

export default ProductCategory;