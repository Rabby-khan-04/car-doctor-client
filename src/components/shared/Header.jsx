import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Button } from "../ui/button";
// import { IoSearchOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { AiFillProduct } from "react-icons/ai";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__item menu__item" : "menu__item"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__item menu__item" : "menu__item"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__item menu__item" : "menu__item"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__item menu__item" : "menu__item"
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active__item menu__item" : "menu__item"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <div className="w-[260px]">
          <Link to="/">
            <img src={logo} className="w-28 inline-block" alt="logo" />
          </Link>
        </div>
        <ul className="list-none flex items-center gap-4 justify-center">
          {navLinks}
        </ul>

        <div className="flex items-center gap-6 w-[260px]">
          <Link to="/cart" className="text-text text-xl">
            <SlHandbag />
          </Link>
          <Link to="/manage-inventory" className="text-text text-xl">
            <AiFillProduct />
          </Link>
          <Button variant="primary__outline" size="lg">
            Appointment
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
