import toast from "react-hot-toast";

const ContactUs = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    toast.success("Message Send Successfully!");
  };

  return (
    <div className="container mx-auto p-5 mt-[100px] md:p-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Contact Us
        </h1>
        <p className=" mt-3 md:text-lg">
          Have questions? Need support? We’re here to help you and your furry
          friends!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE — Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>

          <p className="leading-relaxed">
            Feel free to contact us for any queries or to book a service. Our
            team is always ready to assist you with love and care.
          </p>

          {/* Contact Box */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="btn btn-circle btn-primary text-white">📞</div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="">+880 1700-123456</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="btn btn-circle btn-secondary text-white">📧</div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="">support@petcare.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="btn btn-circle btn-accent text-white">📍</div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="">House 12, Road 5, Banani, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Business Hours</h2>
            <ul className=" space-y-1">
              <li>Sat – Thu: 9:00 AM – 8:00 PM</li>
              <li>Friday: Closed</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="card bg-base-200 shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

          <form onSubmit={handleMessage} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
              required
            />

            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>

            <button
              onClick={() => handleMessage()}
              className="btn btn-primary w-full text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <h1 className="text-4xl mt-10 text-center md:text-5xl font-bold text-primary">
        Our Location
      </h1>
      <div className="mt-10 mb-4 relative">
        <iframe
          className="w-full h-[350px] rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903011106818!2d90.39945271543103!3d23.750837594667487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf517e85b0c9%3A0xd6e6b0b7a13eafc7!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1613112111221"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
