const SectionTitle = ({ subHeading, heading }) => {
   
    return (
        <div className="md:w-4/12 w-64 mx-auto text-[#CE054D] md:my-[70px] border-b-4 p-3 mb-3">
            <p className="text-center">---{subHeading}---</p>
            <h2 className="text-center text-3xl font-semibold">{heading}</h2>

        </div>
    );
};

export default SectionTitle;