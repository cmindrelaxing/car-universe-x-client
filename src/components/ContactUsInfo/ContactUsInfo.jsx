
const ContactUsInfo = () => {
    return (
        <div className="py-20 px-2 md:px-5 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black gap-5">
            <div className="text-center mb-5 md:mb-14 lg:mb-0 shadow-lg flex justify-center items-center py-10 rounded-lg">
                <div>
                <img className="mx-auto w-20 mb-5" src="https://i.ibb.co/R9NH662/car-rental.png" alt="" />
                <h2 className="text-xl font-semibold">Office Address</h2>
                <p><small>25/B Milford, New York, USA</small></p>
                </div>
            </div>
            
            <div className="text-center mb-5 md:mb-14 lg:mb-0 shadow-lg flex justify-center items-center py-10 rounded-lg">
                <div>
                <img className="mx-auto w-20 mb-5" src="https://i.ibb.co/R9NH662/car-rental.png" alt="" />
                <h2 className="text-xl font-semibold">Call Us</h2>
                <p><small>+2 123 4565 789</small></p>
                </div>
            </div>
            
            <div className="text-center mb-5 md:mb-14 lg:mb-0 shadow-lg flex justify-center items-center py-10 rounded-lg">
                <div>
                <img className="mx-auto w-20 mb-5" src="https://i.ibb.co/R9NH662/car-rental.png" alt="" />
                <h2 className="text-xl font-semibold">Email Us</h2>
                <p><small>carsuniversex@gmail.com</small></p>
                </div>
            </div>
            
            <div className="text-center mb-5 md:mb-14 lg:mb-0 shadow-lg flex justify-center items-center py-10 rounded-lg">
                <div>
                <img className="mx-auto w-20 mb-5" src="https://i.ibb.co/R9NH662/car-rental.png" alt="" />
                <h2 className="text-xl font-semibold">Open Time</h2>
                <p><small>Mon - Sat (10.00AM - 05.30PM)</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUsInfo;