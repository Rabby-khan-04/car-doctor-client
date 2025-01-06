import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

const SliderNav = () => {
  const swipe = useSwiper();

  return (
    <div className="text-2xl text-white absolute bottom-12 right-12 z-10 flex items-center gap-5">
      <button
        onClick={() => swipe.slidePrev()}
        className="p-5 rounded-full bg-white/20 duration-300 transition-all hover:bg-primary"
      >
        <GoArrowLeft />
      </button>
      <button
        onClick={() => swipe.slideNext()}
        className="p-5 rounded-full bg-primary"
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default SliderNav;
