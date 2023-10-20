import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCarInfo = ({car, cars, setCars}) => {
    // console.log(car);
    const {_id, name, category, price, description, rating, photo} = car || {};

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`http://localhost:5000/cars/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your Car item has been deleted.',
                                'success'
                            )
                            const remaining = cars?.filter(car => car._id !== _id);
                            setCars(remaining);
                        }
                    })
            }
        })
    };

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
                        <Link to={`/updateProduct/${_id}`}>
                        <button className="text-blue-600 font-bold hover:text-red-500">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="text-blue-600 font-bold hover:text-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyCarInfo.propTypes = {
    car: PropTypes.any.isRequired,
    cars: PropTypes.any.isRequired,
    setCars: PropTypes.any.isRequired,
};

export default MyCarInfo;