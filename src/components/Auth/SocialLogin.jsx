import AuthContext from "@/context/AuthContext";
import Toast from "@/utils/toast";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sighInWithGoogle } = useContext(AuthContext);

  const handleFacebookLogin = () => {};
  const handleLinkedinLogin = () => {};
  const handleGoogleLogin = async () => {
    try {
      const response = await sighInWithGoogle();
      if (response.user) {
        Toast.fire({ icon: "success", text: "User logged in successfully" });
        navigate(location.state || "/");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
