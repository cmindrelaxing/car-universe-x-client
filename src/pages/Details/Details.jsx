import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";


const Details = () => {

    const [details, setDetails] = useState();
    // console.log(details);

    const {id} = useParams();
    // console.log(id);

    const carDetails = useLoaderData();
    // console.log(carDetails);

    useEffect(() => {
        const findDetails = carDetails?.find(detail => detail._id === id);
        setDetails(findDetails);
    }, [id, carDetails]);

    return (
        <div className="px-4 md:px-2 lg:px-10 xl:px-20">
            <Detail details={details}></Detail>
        </div>
    );
};

export default Details;