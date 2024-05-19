import ProductCard from '../../../components/SectionTitle/ProductCard/ProductCard';

const OrderProduct = ({ items }) => {
    return (
        <div className='flex justify-center my-10'>
            <div className='max-w-screen-xl grid md:grid-cols-3 gap-x-8 gap-y-6'>
                {
                    items.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default OrderProduct;