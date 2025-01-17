import { RxCross2 } from "react-icons/rx";
import serviceImg from "@/assets/images/services/1.jpg";

const OrderCard = () => {
  return (
    <div className="flex items-center gap-8">
      {/* Delete Button */}
      <div>
        <button className="text-xl text-white inline-block p-3 rounded-full bg-text duration-300 transition-all hover:bg-primary">
          <RxCross2 />
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src={serviceImg}
          className="size-40 object-cover object-center inline-block rounded-xl"
          alt=""
        />
      </div>

      {/* Details */}
      <div className="space-y-1">
        <h3 className="text-text font-semibold text-xl">Martha Knit Top</h3>
        <p className="text-base font-normal text-[#A2A2A2]">Color : Green</p>
        <p className="text-base font-normal text-[#A2A2A2]">Size: S</p>
      </div>

      {/* Email */}
      <div className="grow text-center">
        <p className="text-xl font-semibold text-text">info@gmail.com</p>
      </div>

      {/* Date */}
      <div className="grow text-center">
        <p className="text-xl font-medium text-[#2D2D2D]">22-10-2022</p>
      </div>

      {/* Action Button */}
      <div className="grow text-end">
        <p className="text-xl font-semibold text-white bg-primary inline-block py-2 px-5 rounded-xl">
          Pending
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
