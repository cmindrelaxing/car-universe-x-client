
const CarBody = () => {
    return (
        <div className=" py-10 px-2 md:px-5 lg:px-10 xl:px-20">
            <h4 className=" text-center text-lg font-semibold text-[#FF444A] tracking-widest" data-aos="fade-up">ABOUT US</h4>
            <h1 className="text-center mt-5 font-semibold text-3xl md:text-4xl lg:text-6xl mb-5 text-black" data-aos="fade-up">
            Car By Body  <span className="text-[#FF444A]">Types</span> 
            </h1>

            <section className="mt-10" >
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/ygDJhn1/01-1.png" alt="" />
                        <h2 className="text-xl">Sedan</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/p0Prv20/02.png" alt="" />
                        <h2 className="text-xl">Compact</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/7XPxCBB/03.png" alt="" />
                        <h2 className="text-xl">Convertible</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/vVZ1C0p/09.png" alt="" />
                        <h2 className="text-xl">SUV</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/N1grhjr/05.png" alt="" />
                        <h2 className="text-xl">Crossover</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/cyJfZxz/06.png" alt="" />
                        <h2 className="text-xl">Wagon</h2>
                    </div>


                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/CvqGgW3/07.png" alt="" />
                        <h2 className="text-xl">Sports</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/p0Prv20/02.png" alt="" />
                        <h2 className="text-xl">Pickup</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/vVZ1C0p/09.png" alt="" />
                        <h2 className="text-xl">Family MPV</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/D5psJ2D/08.png" alt="" />
                        <h2 className="text-xl">Coupe</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/NTZx4f1/11.png" alt="" />
                        <h2 className="text-xl">Electric</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4" data-aos="fade-up">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/sCf4Yz3/12.png" alt="" />
                        <h2 className="text-xl">Luxury</h2>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default CarBody;