import toast from "react-hot-toast";

const ContactForm = () => {

    const handleMessage = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const textarea = form.textarea.value;
        const messageInfo =  { name, email, textarea };
        console.log(messageInfo);

        toast.success(`Your message has been send successfully`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:p-10 lg:py-24 py-10 gap-10 items-center">
            <div>
                <img className="rounded-r-[200px]" src="https://i.ibb.co/F0bMRpQ/contact.jpg" alt="" />
            </div>
            <div>
            <form onSubmit={handleMessage} className="">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="textarea" id="" className="border p-4" cols="30" rows="7"></textarea>
                    </div>

                    <div className="form-control mt-6">
                    <button className="btn text-white py-2 bg-[#FF444A] hover:bg-black hover:text-white">Send Message</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;