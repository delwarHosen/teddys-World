import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CompanyRecomand from "../CompanyRecomand/CompanyRecomand";
import Feature from "../Feature/Feature";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularItem from "../PopularItem/PopularItem";
import Testomonial from "../Testomonial/Testomonial";

import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Teddy Creation | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <HomeBanner></HomeBanner>
           <PopularItem></PopularItem>
           <CompanyRecomand></CompanyRecomand>
           <Feature></Feature>
           <Testomonial></Testomonial>
        </div>
    );
};

export default Home;