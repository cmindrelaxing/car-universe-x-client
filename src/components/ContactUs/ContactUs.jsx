
const ContactUs = () => {

    const contact_us = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.ibb.co/GCtR9vN/01.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 1.9)",
        opacity: "10"
    };

    return (
        <div style={contact_us} className="px-4 md:p-10 lg:p-24 py-10 h-[50dvh] md:h-[300px] lg:h-[400px] flex justify-center items-center">
            <h1 className="text-center text-3xl font-semibold text-white" data-aos="fade-up">Contact Us</h1>
        </div>
    );
};

export default ContactUs;