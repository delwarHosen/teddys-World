import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ShowPopularItem from './ShowPopularItem';
import useProduct from '../../../hooks/useProduct';

const PopularItem = () => {
    const [products] = useProduct()
    const populars = products.filter(item => item.category === "popular")
    return (
        <div className='md:my-16'>
            <SectionTitle
                subHeading="Check it out"
                heading="From our teddy creation"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-5 max-w-screen-xl mx-auto'>
                {
                    populars.map(item => <ShowPopularItem
                        key={item._id}
                        item={item}
                    ></ShowPopularItem>)
                }
            </div>
        </div>
    );
};

export default PopularItem;