import SectionBanner from "@/components/shared/SectionBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddService = (data) => console.log(data);

  return (
    <main>
      {/* Add Service Banner */}
      <section>
        <div className="container">
          <SectionBanner title="Add New Service" />
        </div>
      </section>

      {/* Checkout form */}
      <section className="py-32">
        <div className="container bg-flash_white rounded-xl p-24">
          <form onSubmit={handleSubmit(handleAddService)} className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="space-y-3 w-full">
                <Input
                  type="text"
                  placeholder="Service Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
              <div className="space-y-3 w-full">
                <Input
                  type="number"
                  placeholder="Service Price"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="space-y-3 w-full">
                <Input
                  type="url"
                  placeholder="Photo URL"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
              <div className="space-y-3 w-full">
                <Input
                  type="text"
                  placeholder="Service Type"
                  {...register("type", { required: true })}
                />
                {errors.type && (
                  <p className="text-xs text-red-500">This field is required</p>
                )}
              </div>
            </div>

            <div className="space-y-3 w-full">
              <Textarea
                placeholder="Product Description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-xs text-red-500">This field is required</p>
              )}
            </div>

            <Button type="submit" variant="primary" size="full">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddService;
