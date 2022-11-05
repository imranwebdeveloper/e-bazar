import Section from "../components/common/Section";
import OrderDetails from "../components/Main/OrderDetails";
import OrdersSummary from "../components/Main/OrdersSummary";

const Orders = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-[1fr_340px] gap-4">
        <OrderDetails />
        <OrdersSummary />
      </div>
    </Section>
  );
};

export default Orders;
