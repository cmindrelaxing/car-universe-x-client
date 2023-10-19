
const CarBands = () => {
    return (
        <div className=" py-20 px-2 md:px-5 lg:px-10 xl:px-20">
            <h4 className=" text-center text-lg font-semibold text-[#FF444A] tracking-widest">POPULAR BRANDS</h4>
            <h1 className="text-center mt-5 font-semibold text-3xl md:text-4xl lg:text-6xl mb-5 text-black">
            Our Top Quality <span className="text-[#FF444A]">Brands</span> 
            </h1>

            <section className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <div className="bg-white rounded-xl shadow-lg text-center p-4 ">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/LdkFVgB/01.png" alt="" />
                        <h2 className="text-xl">Ferrari</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/FxYPGwB/02.png" alt="" />
                        <h2 className="text-xl">Hyundai</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/P5YjQ2Y/03.png" alt="" />
                        <h2 className="text-xl">Mercedes Benz</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/Z1zZFQH/04.png" alt="" />
                        <h2 className="text-xl">Toyota</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/CzSr0X3/05.png" alt="" />
                        <h2 className="text-xl">BMW</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg text-center p-4">
                        <img className="mx-auto w-[80%]" src="https://i.ibb.co/XsTKtLX/06.png" alt="" />
                        <h2 className="text-xl">Nissan</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarBands;