import { useLoaderData } from "react-router-dom";
import MyCarInfo from "../../components/myCarInfo/myCarInfo";

const MyCart = () => {

    const cars = useLoaderData();
    // console.log(cars);

    return (
        <div className="py-10 px-2 md:px-5 lg:px-10 xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    cars?.map((car, idx) => <MyCarInfo key={idx} car={car}></MyCarInfo>)
                }
            </div>
        </div>
    );
};

export default MyCart;