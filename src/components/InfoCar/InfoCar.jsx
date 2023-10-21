
const InfoCar = () => {

    const info_car = {
        backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.8)), url('https://i.ibb.co/DQxyYCW/01-5.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 1.9)",
        opacity: "10"
    };

    return (
        <div style={info_car} className=" text-white py-10 px-2 md:px-5 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center mb-5 md:mb-14 lg:mb-0" data-aos="fade-up">
                <img className="mx-auto w-20 mb-5" src="https://i.ibb.co/R9NH662/car-rental.png" alt="" />
                <h1 className="text-5xl  mb-5 font-semibold">500</h1>
                <h2 className="text-xl font-semibold">+ Available Cars</h2>
            </div>
            <div className="text-center mb-5 md:mb-14 lg:mb-0" data-aos="fade-down">
                <img className="mx-auto w-20  mb-5" src="https://i.ibb.co/r3tmbM3/car-key.png" alt="" />
                <h1 className="text-5xl  mb-5 font-semibold">900</h1>
                <h2 className="text-xl font-semibold">+ Happy Clients</h2>
            </div>
            <div className="text-center mb-5 md:mb-14 lg:mb-0" data-aos="fade-up">
                <img className="mx-auto w-20  mb-5" src="https://i.ibb.co/rcmtd1K/tools.png" alt="" />
                <h1 className="text-5xl  mb-5 font-semibold">1500</h1>
                <h2 className="text-xl font-semibold">+ Team Workers</h2>
            </div>
            <div className="text-center mb-5 md:mb-14 lg:mb-0" data-aos="fade-down">
                <img className="mx-auto w-20  mb-5" src="https://i.ibb.co/NNFXXyH/rating.png" alt="" />
                <h1 className="text-5xl  mb-5 font-semibold">50</h1>
                <h2 className="text-xl font-semibold">+ Years Of Experience</h2>
            </div>
        </div>
    );
};

export default InfoCar;