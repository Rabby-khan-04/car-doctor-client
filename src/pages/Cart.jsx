import CartItem from "@/components/Cart/CartItem";
import SectionBanner from "@/components/shared/SectionBanner";
import AuthContext from "@/context/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PiArrowBendUpLeft } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/bookings", {
        params: { email: user.email },
      });

      setBookings(response.data);
    };

    fetchData();
  }, [user]);

  return (
    <main>
      {/* Section Banner */}
      <section>
        <div className="container">
          <SectionBanner title="Cart" />
        </div>
      </section>

      {/* Cart Item Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-7 mb-12">
            {bookings.map((booking) => (
              <CartItem
                key={booking._id}
                booking={booking}
                bookings={bookings}
                setBookings={setBookings}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/services"
              className="text-xl text-text flex items-center gap-5"
            >
              <PiArrowBendUpLeft />
              <span>Continue Shopping</span>
            </Link>
            <button className="text-xl text-text flex items-center gap-5">
              <RiDeleteBinLine />
              <span>Clear Shopping Cart</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
