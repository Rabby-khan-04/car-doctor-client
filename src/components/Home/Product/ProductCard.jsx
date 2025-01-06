import PropTypes from "prop-types";
import productImg from "@/assets/images/products/1.png";
import starImg from "@/assets/icons/star.png";

const ProductCard = (props) => {
  return (
    <div className="pb-8 pt-6 px-5 border border-platinum rounded-xl text-center">
      <div className="py-8 bg-flash_white rounded-xl mb-5">
        <img
          src={productImg}
          className="inline-block size-40 object-cover object-center"
          alt=""
        />
      </div>
      <div className="space-y-[10px]">
        <img src={starImg} className="inline-block w-32" alt="" />
        <h2 className="text-title text-2xl font-bold">Car Engine Plug</h2>
        <p className="text-xl text-primary font-semibold">$200</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
