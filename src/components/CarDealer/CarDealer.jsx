
const CarDealer = () => {
    return (
        <div className="px-2 md:px-5 lg:px-10 xl:px-20 md:flex md:items-center lg:gap-16 md:gap-7 py-20">
            <div>
                <img src="https://i.ibb.co/8YSCsCC/01.png" alt="" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-[#FF444A] tracking-widest">ABOUT US</h4>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5 text-black">
                    Best Way To Find <br /> Your <span className="text-[#FF444A]">Dream</span> Car
                </h1>
                <p className="text-sm lg:text-base">
                    There are many variations of passages orem psum available but the majority
                    have suffered alteration in some form by injected humour.
                </p>

                <div>
                    <p className="flex gap-3 items-center mt-3"><i className='text-red-500 bx bx-check-circle' ></i>At vero eos et accusamus et iusto odio.</p>
                    <p className="flex gap-3 items-center mt-3"><i className='text-red-500 bx bx-check-circle' ></i>Established fact that a reader will be distracted.</p>
                    <p className="flex gap-3 items-center mt-3"><i className='text-red-500 bx bx-check-circle' ></i>Sed ut perspiciatis unde omnis iste natus sit.</p>
                </div>
                <div className="flex gap-4 mt-5">
                <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Discover More <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                </div>
            </div>
        </div>
    );
};

export default CarDealer;