import SectionTitle from "@/components/shared/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    image: "https://i.postimg.cc/MZ1fb3pG/person-1.png",
    name: "John Doe",
    designation: "Car Owner",
    review:
      "The service was outstanding! My car feels brand new, and the team was very professional and friendly. Highly recommended!",
  },
  {
    image: "https://i.postimg.cc/Qxs96gFJ/person-2.png",
    name: "Jane Smith",
    designation: "Business Owner",
    review:
      "Exceptional work! They identified and fixed issues other mechanics couldn’t. I trust them completely with my vehicles.",
  },
  {
    image: "https://i.postimg.cc/MZ1fb3pG/person-1.png",
    name: "Michael Brown",
    designation: "Mechanic Enthusiast",
    review:
      "A truly fantastic experience! The team’s expertise and customer service exceeded all expectations. I’ll be back for sure.",
  },
  {
    image: "https://i.postimg.cc/Qxs96gFJ/person-2.png",
    name: "Emily Johnson",
    designation: "Frequent Traveler",
    review:
      "Their quick and reliable service is a lifesaver! I always feel confident hitting the road after visiting them.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <SectionTitle
          subtitle="Testimonial"
          title="What Customer Says"
          text="Hear from our valued customers about their experiences with our services. Their stories reflect our dedication to quality, reliability, and exceptional customer care. See why so many trust us to keep their vehicles in top condition!"
        />

        <div className="pt-5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            // plugins={[
            //   Autoplay({
            //     delay: 3000,
            //   }),
            // ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem className="basis-1/2" key={idx}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-flash_white" />
            <CarouselNext className="bg-primary text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
