import bannerImg1 from "@/assets/images/banner/1.jpg";
import bannerImg2 from "@/assets/images/banner/2.jpg";
import bannerImg3 from "@/assets/images/banner/3.jpg";
import bannerImg4 from "@/assets/images/banner/4.jpg";
import bannerImg5 from "@/assets/images/banner/5.jpg";
import bannerImg6 from "@/assets/images/banner/6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import BannerSlide from "./BannerSlide";
import SliderNav from "./SliderNav";

const Banner = () => {
  const slides = [
    {
      title: "Expert Car Repair Services",
      description:
        "Trust our skilled technicians to get your car back on the road quickly and safely.",
      image: bannerImg1,
    },
    {
      title: "Engine Diagnostics & Tune-ups",
      description:
        "State-of-the-art diagnostic tools for precise engine performance and health checks.",
      image: bannerImg2,
    },
    {
      title: "Fast & Reliable Oil Changes",
      description:
        "Keep your car running smoothly with our quick and affordable oil change services.",
      image: bannerImg3,
    },
    {
      title: "Comprehensive Brake Services",
      description:
        "Ensure your safety with professional brake inspections, repairs, and replacements.",
      image: bannerImg4,
    },
    {
      title: "Tire Replacement & Alignment",
      description:
        "Enhance your driving experience with top-quality tires and precision alignments.",
      image: bannerImg5,
    },
    {
      title: "Affordable Maintenance Plans",
      description:
        "Save time and money with our customized car maintenance packages.",
      image: bannerImg6,
    },
  ];

  return (
    <section>
      <div className="container rounded-xl overflow-hidden relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <BannerSlide slide={slide} />
            </SwiperSlide>
          ))}

          <SliderNav />
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
