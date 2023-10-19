import PropTypes from 'prop-types';

const MyCarInfo = ({car}) => {
    // console.log(car);
    const {name, category, price, description, rating, photo} = car;

    return (
        <div>
            <div className='rounded-lg shadow-lg md:mb-10'>
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
                        <p className='text-base font-medium'>{category}</p>
                    </div>
                    <p><small>{description}</small></p>

                    <div className='flex justify-between items-center gap-5 my-4'>
                        <button className="text-blue-600 font-bold">Update</button>
                        <button className="text-blue-600 font-bold">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyCarInfo.propTypes = {
    car: PropTypes.any.isRequired,
};

export default MyCarInfo;