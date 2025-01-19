import OrderCard from "@/components/ManageInventory/OrderCard";
import SectionBanner from "@/components/shared/SectionBanner";
import axios from "axios";
import { useEffect, useState } from "react";

const ManageInventory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/bookings");

      setOrders(response.data);
    };

    fetchData();
  }, []);

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
            {orders.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManageInventory;
