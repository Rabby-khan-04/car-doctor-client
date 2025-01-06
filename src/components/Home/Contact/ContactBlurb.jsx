import PropTypes from "prop-types";

const ContactBlurb = ({ info }) => {
  return (
    <a href={info.link} className="flex items-center gap-5">
      <div>
        <img src={info.icon} className="size-10" alt="" />
      </div>
      <div className="text-white space-y-[10px]">
        <p className="text-base font-medium">{info.text}</p>
        <h3 className="text-2xl font-bold">{info.info}</h3>
      </div>
    </a>
  );
};

ContactBlurb.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ContactBlurb;
