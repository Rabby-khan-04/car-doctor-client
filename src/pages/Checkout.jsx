import SectionBanner from "@/components/shared/SectionBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckout = (data) => console.log(data);

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
                  placeholder="First Name"
                  {...register("first_name", { required: true })}
                />
                {errors.first_name && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
              <div className="space-y-3 w-full">
                <Input
                  type="text"
                  placeholder="Last Name"
                  {...register("last_name", { required: true })}
                />
                {errors.last_name && (
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
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
            </div>

            <div className="space-y-3 w-full">
              <Textarea
                placeholder="Your Message"
                {...register("message", {})}
              />
              {errors.message && (
                <p className="text-xs text-red-500">This field is required</p>
              )}
            </div>

            <Button type="submit" variant="primary" size="full">
              Order Confirm
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
