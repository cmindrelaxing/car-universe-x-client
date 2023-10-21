import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const CarShow = ({car}) => {
    // console.log(car);
    const {_id, name, brand, price, rating, photo} = car || {};

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const detailsPage = () => {
        if(user) {
            toast.success(`Welcome to details page`);
            navigate(`/cars/${_id}`);
        } else {
            toast.error(`Please login to details page`);
            navigate('/login');
        }
    };

    return (
        <div>
            <div className='rounded-lg shadow-lg md:mb-10' data-aos="fade-up">
                <div className='p-4'>
                    <img className='rounded-lg' src={photo} alt="" />  
                </div>
                <div className='px-5 pb-5'>
                    <h2 className='text-lg font-medium'>{name}</h2>
                    <div className='flex items-center gap-4'>
                        <div>
                            <i className='text-[#FF444A] bx bxs-star'></i>
                            <i className='text-[#FF444A] bx bxs-star'></i>
                            <i className='text-[#FF444A] bx bxs-star'></i>
                            <i className='text-[#FF444A] bx bxs-star'></i>
                            <i className='text-[#FF444A] bx bxs-star'></i>
                        </div>
                        <span className='text-lg font-semibold text-[#FF444A]'>{rating}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-semibold text-[#FF444A]'>${price}</p>
                        <p className='text-base font-medium'>{brand}</p>
                    </div>
                    <div className='flex justify-center items-center py-5'>
                    {/* <Link to={`/cars/${_id}`}>
                    <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Details <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                    </Link> */}                     
                    <button onClick={detailsPage} className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Details <i className='font-semibold text-base bx bx-right-arrow-alt'></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CarShow.propTypes = {
    car: PropTypes.any.isRequired,
};

export default CarShow;