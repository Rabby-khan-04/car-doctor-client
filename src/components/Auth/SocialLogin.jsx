import PropTypes from "prop-types";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ title }) => {
  const handleFacebookLogin = () => {};
  const handleLinkedinLogin = () => {};
  const handleGoogleLogin = () => {};

  return (
    <div className="mt-8 mb-12">
      <h3 className="text-lg font-medium text-text mb-8">{title}</h3>
      <div className="flex items-center justify-center gap-4">
        <button
          className="text-2xl text-[#3B5998] inline-block p-4 bg-[#F5F5F8] rounded-full"
          onClick={handleFacebookLogin}
        >
          <FaFacebookF />
        </button>
        <button
          className="text-2xl text-[#0A66C2] inline-block p-4 bg-[#F5F5F8] rounded-full"
          onClick={handleLinkedinLogin}
        >
          <FaLinkedinIn />
        </button>
        <button
          className="text-2xl inline-block p-4 bg-[#F5F5F8] rounded-full"
          onClick={handleGoogleLogin}
        >
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

SocialLogin.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SocialLogin;
