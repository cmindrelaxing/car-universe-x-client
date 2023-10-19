import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CarBands from "../../components/CarBands/CarBands";
import CarBody from "../../components/CarBody/CarBody";
import CarDealer from "../../components/CarDealer/CarDealer";
import InfoCar from "../../components/InfoCar/InfoCar";
import CarShow from "../../components/CarShow/CarShow";

const Home = () => {

    const cars = useLoaderData();
    // console.log(cars);

    return (
        <div>
            <Banner></Banner>
            <CarDealer></CarDealer>
            <div className="pb-20 pt-16">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5 text-black text-center">
                    Our Popular <span className="text-[#FF444A]">Cars</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-5 gap-5 px-2 md:px-5 lg:px-10 xl:px-20">
                    {
                        cars?.map((car, idx) => <CarShow key={idx} car={car}></CarShow>)
                    }
                </div>
            </div>
            <InfoCar></InfoCar>
            <CarBody></CarBody>
            <CarBands></CarBands>
        </div>
    );
};

export default Home;