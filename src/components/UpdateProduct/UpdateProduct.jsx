
const UpdateProduct = () => {
    return (
        <div className="bg-[#F4F3F0] px-4 md:p-10 lg:p-24 py-10">
            <h2 className="text-3xl font-extrabold mb-5">Add a New Car</h2>
            <form>
                {/* form Car Name and Category row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Car Name" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="">
                            <input type="text" name="category" placeholder="Enter Car category" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form Price and Description row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="">
                            <input type="text" name="price" placeholder="Car Price" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="">
                            <input type="text" name="description" placeholder="Enter Car Description" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form Rating and image URL row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="">
                            <input type="text" name="rating" placeholder="Enter Car Rating" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form btn */}
                <input type="submit" value="Add New Car" className="btn btn-block bg-black text-white hover:bg-red-500" />
            </form>
        </div>
    );
};

export default UpdateProduct;