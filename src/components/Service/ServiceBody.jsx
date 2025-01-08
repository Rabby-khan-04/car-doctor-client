import PropTypes from "prop-types";
import bannerImg from "@/assets/images/banner/3.jpg";
import thumbImg from "@/assets/images/banner/2.jpg";
import SellingPoint from "./SellingPoint";
import ServicingStep from "./ServicingStep";
import playBtn from "@/assets/icons/playbtn.svg";
import ServiceNavItem from "./ServiceNavItem";
import ServiceDocument from "./ServiceDocument";
import logo from "@/assets/logo-white.svg";
import { Button } from "../ui/button";

const ServiceBody = (props) => {
  const sellingPoints = [
    {
      title: "Instant Car Services",
      description:
        "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
    },
    {
      title: "24/7 Quality Service",
      description:
        "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
    },
    {
      title: "Easy Customer Service",
      description:
        "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
    },
    {
      title: "Quality Cost Service",
      description:
        "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
    },
  ];

  const servicingProcessStep = [
    {
      title: "Book Your Service",
      description: "Schedule your service online or give us a call.",
    },
    {
      title: "Bring Your Vehicle",
      description: "Visit our service center at your convenience.",
    },
    {
      title: "Enjoy the Drive",
      description: "Pick up your car and experience the difference!",
    },
  ];

  return (
    <section className="py-32">
      {/* Service Body Container */}
      <div className="container grid grid-cols-3 gap-6">
        {/* Service left section */}
        <div className="col-span-2 space-y-12">
          {/* Service Image */}
          <div>
            <img
              src={bannerImg}
              className="inline-block h-[400px] rounded-xl w-full object-cover object-center"
              alt=""
            />
          </div>
          {/* Service Description */}
          <div className="space-y-8">
            <h2 className="text-title text-4xl font-bold">
              Unique Car Engine Service
            </h2>
            <p className="text-nickel text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don{`'`}t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn{`'`}t anything embarrassing
              hidden in the middle of text.{" "}
            </p>

            {/* Selling points */}
            <div className="grid grid-cols-2 gap-6">
              {sellingPoints.map((sellingPoint, idx) => (
                <SellingPoint
                  key={idx}
                  title={sellingPoint.title}
                  description={sellingPoint.description}
                />
              ))}
            </div>
            <p className="text-nickel text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don{`'`}t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn{`'`}t anything embarrassing
              hidden in the middle of text.{" "}
            </p>
          </div>

          {/* Servicing Process */}
          <div className="space-y-8">
            <h2 className="text-title text-4xl font-bold">
              3 Simple Steps to Process
            </h2>
            <p className="text-nickel text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don{`'`}t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn{`'`}t anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            {/* Servicing Steps */}
            <div className="grid grid-cols-3 gap-6">
              {servicingProcessStep.map((step, idx) => (
                <ServicingStep
                  key={idx}
                  title={step.title}
                  description={step.description}
                  idx={idx}
                />
              ))}
            </div>
          </div>
          {/* Service Video */}
          <div className="relative">
            <img
              src={thumbImg}
              className="w-full rounded-xl h-[400px] object-cover object-center"
              alt=""
            />
            <img
              src={playBtn}
              className="inline-block w-32 h-32 absolute top-[calc(50%-64px)] left-0 right-0 bottom-0 mx-auto"
              alt=""
            />
          </div>
        </div>

        {/* Service sidebar */}
        <div className="space-y-8">
          {/* Service navigation */}
          <div className="bg-flash_white rounded-xl p-10 space-y-5">
            <h3 className="text-2xl font-bold text-title">Services</h3>
            <ServiceNavItem id="1" />
            <ServiceNavItem id="2" />
            <ServiceNavItem id="3" />
          </div>

          {/* Service Download Files */}
          <div className="space-y-5 p-10 rounded-xl bg-title">
            <h3 className="text-2xl font-bold text-white">Download</h3>
            <ServiceDocument text="Our Brochure" />
            <ServiceDocument text="Company Details" />
          </div>

          {/* Service CTA */}
          <div className="space-y-5 px-12 pt-12 pb-16 rounded-xl bg-title text-center">
            <img src={logo} className="inline-block w-36" alt="" />
            <h3 className="text-xl text-white font-bold">
              Need Help? We Are Here To Help You
            </h3>
            <div className="px-11 pt-5 pb-9 bg-white rounded-xl text-center relative">
              <h3 className="text-title text-xl font-bold">
                <span className="text-primary">Car Doctor</span> Special
              </h3>
              <p className="text-nickel font-bold">
                Save up to <span className="text-primary">60% off</span>
              </p>
              <div className="absolute mx-auto left-0 right-0 -bottom-7">
                <Button variant="primary" size="lg">
                  Get A Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Price And Checkout */}
          <div className="space-y-8">
            <h3 className="text-4xl text-title font-bold">Price $250.00</h3>

            <Button variant="primary" size="lg" className="w-full">
              Proceed Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceBody.propTypes = {};

export default ServiceBody;
