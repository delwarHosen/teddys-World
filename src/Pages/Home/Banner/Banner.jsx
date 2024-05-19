import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import autoPlay from 'embla-carousel-autoplay'

import img1 from '../../../assets/banner/banner4.png'
import img2 from '../../../assets/banner/banner2.png'
import img3 from '../../../assets/banner/banner3.png'
import img4 from '../../../assets/banner/banner1.png'

const Banner = () => {
    return (
        <Carousel className="text-center" plugins={[autoPlay(true)]}>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
        </Carousel>
    );
};

export default Banner;