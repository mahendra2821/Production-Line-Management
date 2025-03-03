import OrderForm from "../components/OrderForm";

const OperatorDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Operator Dashboard</h1>
      <OrderForm />
    </div>
  );
};

export default OperatorDashboardPage;
