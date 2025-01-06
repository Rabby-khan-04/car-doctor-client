import PropTypes from "prop-types";

const SectionTitle = ({
  subtitle,
  title,
  text,
  text2 = "",
  align = "center",
}) => {
  return (
    <div
      className={`${
        align === "left" ? "text-left" : "text-center mx-auto max-w-3xl"
      }`}
    >
      <h4 className="text-xl font-bold text-primary mb-5">{subtitle}</h4>
      <h2 className="text-title text-5xl font-bold mb-8">{title}</h2>
      <p className="text-nickel text-base font-normal mb-5">{text}</p>
      {text2 && (
        <p className="text-nickel text-base font-normal mb-5">{text2}</p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string,
  align: PropTypes.string,
};

export default SectionTitle;
