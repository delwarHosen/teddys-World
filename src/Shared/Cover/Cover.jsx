import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={img}
            bgImageAlt="the cover"
            strength={-600}
            className='md:h-[500px]'
        >
            <div className="hero md:h-[550px] h-[350px]" >
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md bg-black bg-opacity-40 p-10">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;