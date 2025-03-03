

import OrderForm from "../components/OrderForm";

const ManagerDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>
      <OrderForm />
    </div>
  );
};

export default ManagerDashboardPage;
