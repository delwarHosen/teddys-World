import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg1 from '../../../assets/coverImg/bannerCategory.png'

const ProductMenu = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Teddy Creation | Product Menu</title>
            </Helmet>
            <Cover img={coverImg1} title="Teddy' world"></Cover>
        </div>
    );
};

export default ProductMenu;