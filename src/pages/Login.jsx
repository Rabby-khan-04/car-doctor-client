import { useForm } from "react-hook-form";
import signinImg from "@/assets/images/auth/login.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SocialLogin from "@/components/Auth/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Toast from "@/utils/toast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useContext(AuthContext);

  const handleSignin = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      const response = await loginUser(email, password);
      if (response.user) {
        Toast.fire({ icon: "success", text: "User logged in successfully" });
        navigate(location.state || "/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="pb-32 pt-6">
      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="self-center">
            <img src={signinImg} className="w-full inline-block" alt="" />
          </div>

          <div className="border border-[#E8E8E8] rounded-xl p-20 text-center">
            <h1 className="text-[40px] font-semibold text-text mb-12">
              Sign In
            </h1>

            <form
              onSubmit={handleSubmit(handleSignin)}
              className="space-y-7 text-left"
            >
              <div className="w-full">
                <label
                  className="block text-lg font-semibold mb-4 text-text"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="border-[#E8E8E8]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-3">
                    This field is required
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  className="block text-lg font-semibold mb-4 text-text"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  className="border-[#E8E8E8]"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-xs text-red-500 mt-3">
                    This field is required
                  </p>
                )}
              </div>
              <Button type="submit" variant="primary" size="full">
                Sign In
              </Button>
            </form>
            <SocialLogin title="Or Sign in with" />

            <div>
              <p className="text-lg font-normal text-nickel">
                <span>Have an account? </span>
                <Link to="/register" className="text-primary font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
