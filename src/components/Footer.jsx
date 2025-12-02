import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/image.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16 pt-10">
      <div className="container mx-auto px-5 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Logo & Description */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex gap-4 items-center">
            <img className="w-[120px] h-[120px]" src={logo} alt="" />
            <h1 className="text-2xl font-bold text-primary">Pet Care</h1>
          </div>
          <p>
            Providing loving and professional care for your pets. Your furry
            friends are our priority!
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about-us" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <a href="/fq" className="hover:text-primary">
                FAQ
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-primary">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>House 12, Road 5, Banani, Dhaka, Bangladesh</p>
          <p>+880 1700-123456</p>
          <p>tanimislamt@gmail.com</p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start items-center mt-4 space-x-3">
            <a
              href="https://www.facebook.com/tanim.123888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-primary hover:bg-primary hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/tanimahamed.3739s/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-primary hover:bg-primary hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/tanim-ahamed/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-primary hover:bg-primary hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300 text-center py-4 mt-10">
        &copy; {new Date().getFullYear()} Pet Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
