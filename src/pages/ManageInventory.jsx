import OrderCard from "@/components/ManageInventory/OrderCard";
import SectionBanner from "@/components/shared/SectionBanner";

const ManageInventory = () => {
  return (
    <main>
      {/* Section Banner */}
      <section>
        <div className="container">
          <SectionBanner title="Manage All Orders" />
        </div>
      </section>

      {/* Cart Item Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-7 mb-12">
            <OrderCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManageInventory;
