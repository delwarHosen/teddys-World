import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg1 from '../../../assets/coverImg/bannerCategory.png'
import bearImg from '../../../assets/coverImg/bear.png'
import bunniesImg from '../../../assets/coverImg/bunnies.png'
import catImg from '../../../assets/coverImg/cat.png'
import dallImg from '../../../assets/coverImg/dall.png'
import dogImg from '../../../assets/coverImg/dog.png'
import useProduct from "../../../hooks/useProduct";
import ProductCategory from "../ProductCategory/ProductCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ProductMenu = () => {
    const [products] = useProduct()

    const offereds = products.filter(item => item.category === "offered")
    const bears = products.filter(item => item.category === "bear")
    const bunnies = products.filter(item => item.category === "bunnies")
    const dalls = products.filter(item => item.category === "dall")
    const cats = products.filter(item => item.category === "cat")
    const dogs = products.filter(item => item.category === "dog")
    return (
        <div className=''>
            <Helmet>
                <title>Teddy Creation | Product Menu</title>
            </Helmet>
            <Cover img={coverImg1} title="Teddy's world"></Cover>
            {/* Teddy offers */}
            <SectionTitle subHeading="Don't miss it" heading="Today's Offer"></SectionTitle>
            <ProductCategory items={offereds}></ProductCategory>
            {/* teddy Bear */}
            <ProductCategory items={bears} title="bear" img={bearImg}></ProductCategory>
            {/* Bunnies Teddy */}
            <ProductCategory items={bunnies} title="bunnies" img={bunniesImg}></ProductCategory>
            {/* dalls teddy */}
            <ProductCategory items={dalls} title="dall" img={dallImg}></ProductCategory>
            {/* Cats teddy */}
            <ProductCategory items={cats} title="cat" img={catImg}></ProductCategory>
            {/* Dogs teddy */}
            <ProductCategory items={dogs} title="dog" img={dogImg}></ProductCategory>
        </div>
    );
};

export default ProductMenu;