import SectionTitle from "@/components/shared/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import team1 from "@/assets/images/team/1.jpg";
import team2 from "@/assets/images/team/2.jpg";
import team3 from "@/assets/images/team/3.jpg";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  const teamData = [
    {
      name: "John Smith",
      designation: "Senior Mechanic",
      image: team1,
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Emily Johnson",
      designation: "Automotive Engineer",
      image: team2,
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Michael Brown",
      designation: "Car Diagnostic Specialist",
      image: team3,
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Sophia Davis",
      designation: "Customer Support Manager",
      image: team1,
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "David Wilson",
      designation: "Tire and Wheel Specialist",
      image: team3,
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Olivia Martinez",
      designation: "Body Repair Expert",
      image: team2,
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  ];

  return (
    <section className="pt-32">
      <div className="container">
        <SectionTitle
          subtitle="Team"
          title="Meet Our Team"
          text="Get to know the skilled professionals behind our exceptional service. Our dedicated team combines expertise, passion, and commitment to keep your vehicle running smoothly."
        />

        <div className="pt-5 mb-12">
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
              {teamData.map((team, idx) => (
                <CarouselItem className="basis-1/3" key={idx}>
                  <TeamCard team={team} />
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

export default TeamSection;
