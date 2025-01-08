import bannerBG from "@/assets/images/banner/4.jpg";
import PropTypes from "prop-types";

const SectionBanner = ({ title }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(21, 21, 21, 1), rgba(21, 21, 21, 0)), url(${bannerBG})`,
      }}
      className="py-32 px-24 bg-cover bg-center bg-no-repeat rounded-xl relative"
    >
      <h1 className="text-5xl font-bold text-white">{title}</h1>

      <div className="bg-primary inline-block py-4 absolute left-0 right-0 bottom-0 mx-auto max-w-xs before:w-0 before:h-0 before:border-solid before:border-b-[60px] before:border-l-[60px] before:border-t-0 before:border-r-0 before:border-b-primary before:border-l-transparent before:border-t-transparent before:border-r-transparent before:rotate-0 before:absolute before:top-0 before:-left-[60px] after:w-0 after:h-0 after:border-solid after:border-b-0 after:border-l-[60px] after:border-t-[60px] after:border-r-0 after:border-b-transparent after:border-l-primary after:border-t-transparent after:border-r-transparent after:rotate-0 after:absolute after:top-0 after:-right-[60px]">
        <h2 className="text-xl font-medium text-white text-center">
          Home / {title}
        </h2>
      </div>
    </div>
  );
};

SectionBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionBanner;
