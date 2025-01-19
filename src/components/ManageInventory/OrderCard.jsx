import { RxCross2 } from "react-icons/rx";
import serviceImg from "@/assets/images/services/1.jpg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import Toast from "@/utils/toast";

const OrderCard = ({ order, orders, setOrders }) => {
  const { _id, service_img, service, status, userName, price, date, email } =
    order;
  const [bookingStatus, setBookingStatus] = useState(status);

  const handleRemoveOrder = async () => {
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
          const restBookings = orders.filter(
            (bookedItem) => bookedItem._id !== _id
          );

          setOrders(restBookings);

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

  const handleOrderStatusUpdate = async (orderStatus) => {
    setBookingStatus(orderStatus);

    const response = await axios.patch(`http://localhost:5000/booking/${_id}`, {
      orderStatus,
    });
    if (response.data.modifiedCount > 0) {
      Toast.fire({ icon: "success", text: "Order updated!!" });
    }
  };

  return (
    <div className="flex items-center gap-8">
      {/* Delete Button */}
      <div>
        <button
          onClick={handleRemoveOrder}
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
        <p className="text-base font-normal text-[#A2A2A2]">Price: ${price}</p>
      </div>

      {/* Email */}
      <div className="grow text-center">
        <p className="text-xl font-semibold text-text">{email}</p>
      </div>

      {/* Date */}
      <div className="grow text-center">
        <p className="text-xl font-medium text-[#2D2D2D]">{date}</p>
      </div>

      {/* Action Button */}
      <div className="grow text-end">
        <Select
          value={bookingStatus}
          onValueChange={(value) => handleOrderStatusUpdate(value)}
        >
          <SelectTrigger
            className={`w-auto px-4 text-lg border ${
              bookingStatus === "Pending"
                ? "text-primary border-primary"
                : bookingStatus === "Approved"
                ? "text-green-500 border-green-500"
                : "text-gray-500 border-gray-500"
            }`}
          >
            <SelectValue placeholder={status} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Canceled">Canceled</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
};

export default OrderCard;
