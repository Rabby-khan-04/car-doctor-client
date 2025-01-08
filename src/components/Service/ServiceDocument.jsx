import PropTypes from "prop-types";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const ServiceDocument = ({ text }) => {
  return (
    <div className="text-white flex items-center justify-between">
      <div className="flex items-center gap-2">
        <HiOutlineDocumentChartBar className="inline-block text-3xl" />
        <div>
          <h3 className="text-lg font-semibold">{text}</h3>
          <p className="text-[#A2A2A2] text-base font-normal">Download</p>
        </div>
      </div>
      <div className="inline-block p-4 text-2xl rounded-md bg-primary text-white">
        <GoArrowRight className="" />
      </div>
    </div>
  );
};

ServiceDocument.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ServiceDocument;
