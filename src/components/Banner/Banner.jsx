import { Link } from "react-router-dom";

const Banner = () => {
    const hero_style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.ibb.co/yfs2RVH/slider-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 1.9)",
        opacity: "10"
    };

    return (
        <div style={hero_style} className="h-[100dvh] flex items-center">
             <div className="  py-4 px-2 md:px-5 lg:px-10 xl:px-20 z-10">
                <div data-aos="fade-right">
                    <h2 className="text-[#FF444A] font-semibold uppercase mb-5">Welcome to Car Universe X</h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5 text-white">
                        Best Way To Find <br /> Your <span className="text-[#FF444A]">Dream</span> Car
                    </h1>
                    <p className="text-sm lg:text-base text-white md:w-[50%]">
                        There are many variations of passages orem psum available but the majority
                        have suffered alteration in some form by injected humour.
                    </p>

                    <div className="flex gap-4 mt-5">
                    <Link to={'/about'}>
                    <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">About <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                    </Link>
                    <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Login <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                    </div>
                </div>
            </div>
            <div className="absolute right-5 left-5 md:left-0 md:right-5 bottom-0 lg:bottom-0">
                <img className=" md:w-[50%] lg:w-[60%] md:float-right mx-auto" src="https://i.ibb.co/2v58gRB/hero-2.png" alt="" data-aos="fade-up" />
            </div>
        </div>
    );
};

export default Banner;