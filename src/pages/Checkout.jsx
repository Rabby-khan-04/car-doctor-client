import SectionBanner from "@/components/shared/SectionBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AuthContext from "@/context/AuthContext";
import Toast from "@/utils/toast";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const { data } = useLoaderData();

  const handleCheckout = async (info) => {
    const name = info.name;
    const date = info.date;
    const phone = info.phone;
    const email = info.email;
    const message = info.message;

    const orderInfo = {
      userName: name,
      date,
      phone,
      email,
      price: data?.price,
      service_id: data?._id,
      service: data?.title,
      service_img: data?.img,
      message,
    };

    const response = await axios.post(
      "http://localhost:5000/bookings",
      orderInfo,
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.data?._id) {
      Toast.fire({ icon: "success", text: "Order placed successfully" });
    }
  };

  return (
    <main>
      {/* Checkout banner */}
      <section>
        <div className="container">
          <SectionBanner title="Checkout" />
        </div>
      </section>

      {/* Checkout form */}
      <section className="py-32">
        <div className="container bg-flash_white rounded-xl p-24">
          <form onSubmit={handleSubmit(handleCheckout)} className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="space-y-3 w-full">
                <Input
                  type="text"
                  placeholder="Name"
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
              <div className="space-y-3 w-full">
                <Input
                  type="date"
                  placeholder="Date"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="space-y-3 w-full">
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
              <div className="space-y-3 w-full">
                <Input
                  type="email"
                  defaultValue={user.email}
                  placeholder="Your Email"
                  {...register("email")}
                />
              </div>
            </div>

            <div className="space-y-3 w-full">
              <Textarea
                placeholder="Your Message"
                {...register("message", {})}
              />
            </div>

            <Button type="submit" variant="primary" size="full">
              Place Order
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
