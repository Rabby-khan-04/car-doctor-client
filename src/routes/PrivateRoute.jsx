import LoadingSpinner from "@/components/shared/LoadingSpinner";
import AuthContext from "@/context/AuthContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingSpinner />;

  if (user) return children;
  else return <Navigate to="/login" state={location.pathname} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
