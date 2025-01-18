import signUpImg from "@/assets/images/auth/login.svg";
import SocialLogin from "@/components/Auth/SocialLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthContext from "@/context/AuthContext";
import Toast from "@/utils/toast";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignup = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;
    try {
      const response = await createUser(email, password);
      if (response.user) {
        updateUserProfile({ displayName })
          .then(() => {
            Toast.fire({
              icon: "success",
              text: "User registered successfully",
            });
          })
          .catch((err) => {
            console.error(err);
          });
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
            <img src={signUpImg} className="w-full inline-block" alt="" />
          </div>

          <div className="border border-[#E8E8E8] rounded-xl p-20 text-center">
            <h1 className="text-[40px] font-semibold text-text mb-12">
              Sign Up
            </h1>

            <form
              onSubmit={handleSubmit(handleSignup)}
              className="space-y-7 text-left"
            >
              <div className="w-full">
                <label
                  className="block text-lg font-semibold mb-4 text-text"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="border-[#E8E8E8]"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-3">
                    This field is required
                  </p>
                )}
              </div>
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
                Sign Up
              </Button>
            </form>
            <SocialLogin title="Or Sign Up with" />

            <div>
              <p className="text-lg font-normal text-nickel">
                <span>Already have an account? </span>
                <Link to="/login" className="text-primary font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
