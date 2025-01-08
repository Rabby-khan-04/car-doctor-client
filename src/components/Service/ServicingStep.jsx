import PropTypes from "prop-types";

const ServicingStep = ({ title, description, idx }) => {
  return (
    <div className="py-10 px-9 border border-platinum rounded-xl space-y-5 text-center">
      <div className="inline-block p-3 bg-primary/10 rounded-full">
        <p className="text-xl font-bold text-white inline-block p-4 rounded-full bg-primary size-16">
          {idx + 1}
        </p>
      </div>
      <h4 className="text-xl text-title font-bold">{title}</h4>
      <p className="text-nickel">{description}</p>
    </div>
  );
};

ServicingStep.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};
export default ServicingStep;
