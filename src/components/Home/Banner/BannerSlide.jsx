import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";

const BannerSlide = ({ slide }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(21, 21, 21, 1), rgba(21, 21, 21, 0)), url(${slide.image})`,
      }}
      className="h-[600px] p-24 bg-cover bg-center bg-no-repeat flex items-center justify-start"
    >
      <div className="max-w-[490px] space-y-8">
        <h2 className="text-6xl font-bold text-white leading-tight">
          {slide.title}
        </h2>
        <p className="text-lg text-white font-normal ">{slide.description}</p>
        <div className="flex items-center gap-5 flex-wrap">
          <Button variant="primary" size="lg">
            Discover More
          </Button>
          <Button variant="secondary__outline" size="lg">
            Latest Project
          </Button>
        </div>
      </div>
    </div>
  );
};

BannerSlide.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default BannerSlide;
