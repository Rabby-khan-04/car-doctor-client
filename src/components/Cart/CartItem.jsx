import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import serviceImg from "@/assets/images/services/1.jpg";
import Swal from "sweetalert2";
import axios from "axios";

const CartItem = ({ booking, bookings, setBookings }) => {
  const { _id, service_img, service, status, userName, price, date, email } =
    booking;

  const handleRemoveBooking = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF3811",
        cancelButtonColor: "#444444",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(
          `http://localhost:5000/booking/${_id}`
        );

        if (response.data.deletedCount > 0) {
          const restBookings = bookings.filter(
            (bookedItem) => bookedItem._id !== _id
          );

          setBookings(restBookings);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-8">
      {/* Delete Button */}
      <div>
        <button
          onClick={handleRemoveBooking}
          className="text-xl text-white inline-block p-3 rounded-full bg-text duration-300 transition-all hover:bg-primary"
        >
          <RxCross2 />
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src={service_img || serviceImg}
          className="size-40 object-cover object-center inline-block rounded-xl"
          alt=""
        />
      </div>

      {/* Details */}
      <div className="space-y-1">
        <h3 className="text-text font-semibold text-xl">{service}</h3>
        <p className="text-base font-normal text-[#A2A2A2]">Name: {userName}</p>
        <p className="text-base font-normal text-[#A2A2A2]">Email: {email}</p>
      </div>

      {/* Price */}
      <div className="grow text-center">
        <p className="text-xl font-semibold text-text">${price}</p>
      </div>

      {/* Date */}
      <div className="grow text-center">
        <p className="text-xl font-medium text-[#2D2D2D]">{date}</p>
      </div>

      {/* Action Button */}
      <div className="grow text-end">
        <p
          className={`text-xl font-semibold text-white inline-block py-2 px-5 rounded-xl ${
            status === "Pending"
              ? "bg-primary"
              : status === "Approved"
              ? "bg-green-500"
              : "bg-gray-500"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  booking: PropTypes.object.isRequired,
  bookings: PropTypes.array.isRequired,
  setBookings: PropTypes.func.isRequired,
};

export default CartItem;
