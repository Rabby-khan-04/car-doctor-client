import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-32 bg-title">
      <div className="container grid grid-cols-5 gap-10 text-white">
        <div className="space-y-5 col-span-2">
          <img src={logo} className="w-32 inline-block" alt="" />
          <p>
            At Car Doctor, we specialize in providing reliable car repair and
            maintenance services to keep your vehicle running smoothly. With a
            team of skilled mechanics and state-of-the-art equipment, we ensure
            quality and satisfaction in every service. Trust us for all your
            automotive needs—your car’s health is our priority!
          </p>

          <div className="flex items-center gap-3 ">
            <a
              href="#"
              className="inline-block text-base p-2 rounded-full bg-nickel"
            >
              <FaGoogle className="" />
            </a>
            <a
              href="#"
              className="inline-block text-base p-2 rounded-full bg-nickel"
            >
              <FaTwitter className="" />
            </a>
            <a
              href="#"
              className="inline-block text-base p-2 rounded-full bg-nickel"
            >
              <FaInstagram className="" />
            </a>
            <a
              href="#"
              className="inline-block text-base p-2 rounded-full bg-nickel"
            >
              <FaLinkedin className="" />
            </a>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-10">About</h3>
          <ul className="space-y-3 text-base text-flash_white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-10">Company</h3>
          <ul className="space-y-3 text-base text-flash_white">
            <li>
              <Link to="/">Why Car Doctor</Link>
            </li>
            <li>
              <Link to="/services">About</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-10">Support</h3>
          <ul className="space-y-3 text-base text-flash_white">
            <li>
              <Link to="/">Support Center</Link>
            </li>
            <li>
              <Link to="/services">Feedback</Link>
            </li>
            <li>
              <Link to="/contact">Accesbility</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
