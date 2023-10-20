import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Detail = ({details}) => {
    // console.log(details);

    const {name, category, price, description, rating, photo} = details || {};
    
    const {user} = useContext(AuthContext);

    const handleConfirmation = () => {
        console.log(`Confirmation your order: ${name}`);
        if(user) {
            toast.success(`Your order has been confirmed ${name}`);
        }
    };

    return (
        <div className='py-10 px-2 md:px-5 lg:px-10 xl:px-20'>
            <div>
                <img className='w-full mx-auto' src={photo} alt="" />
                <div className='pb-5 pt-10'>
                    <h2 className='text-lg md:text-3xl font-semibold'>{name}</h2>
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
                    <p className='text-lg font-semibold text-[#FF444A]'>${price}</p>
                    <p className='text-base font-medium'>{category}</p>
                    <p className='py-5'><small>{description}</small></p>
                    <button onClick={handleConfirmation} className="bg-[#FF444A] mt-5 text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Order Now</button>
                </div>
            </div>
        </div>
    );
};

Detail.propTypes = {
    details: PropTypes.object.isRequired,
};

export default Detail;
