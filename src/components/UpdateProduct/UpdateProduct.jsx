import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const car = useLoaderData();
    console.log(car);
    const {_id, name, category, price, description, rating, photo} = car || {};

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const updateProductInfo = {name, category, price, description, rating, photo};
        console.log(updateProductInfo);

        // update the product info
        fetch(`https://car-universe-x-server-dhgxlr0vn-shakil-ahmeds-projects-043baff6.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car information Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };

    return (
        <div className="bg-[#F4F3F0] px-4 md:p-10 lg:p-24 py-10 ">
            <h2 className=" text-base md:text-3xl font-extrabold mb-5" data-aos="fade-up">Update Car Information : {name}</h2>
            <form onSubmit={handleUpdate}>
                {/* form Car Name and Category row */}
                <div className="md:flex gap-5 mb-8" data-aos="fade-up">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Car Name" defaultValue={name} className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="">
                            <input type="text" name="category" placeholder="Enter Car category" defaultValue={category} className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form Price and Description row */}
                <div className="md:flex gap-5 mb-8" data-aos="fade-up">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="">
                            <input type="text" name="price" placeholder="Car Price" defaultValue={price} className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="">
                            <input type="text" name="description" placeholder="Enter Car Description" defaultValue={description} className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form Rating and image URL row */}
                <div className="md:flex gap-5 mb-8" data-aos="fade-up">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="">
                            <input type="text" name="rating" placeholder="Enter Car Rating" defaultValue={rating} className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" placeholder="Enter photo URL" defaultValue={photo} className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form btn */}
                <input type="submit" value="Update Car Information" className="btn btn-block bg-black text-white hover:bg-red-500" />
            </form>
        </div>
    );
};

export default UpdateProduct;