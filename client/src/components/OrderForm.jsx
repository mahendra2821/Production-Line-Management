import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../redux/slices/ordersSlice";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    priority: "Low",
    materialsUsed: [{ materialId: "", quantity: "" }],
    workstationId: "",
  });

  const dispatch = useDispatch();
  const orderStatus = useSelector((state) => state.orders.status);
  const orderError = useSelector((state) => state.orders.error);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMaterialChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newMaterials = [...prevData.materialsUsed];
      newMaterials[index] = { ...newMaterials[index], [name]: value };
      return { ...prevData, materialsUsed: newMaterials };
    });
  };

  const addMaterial = () => {
    setFormData((prevData) => ({
      ...prevData,
      materialsUsed: [...prevData.materialsUsed, { materialId: "", quantity: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dispatching order:", formData);
    dispatch(createOrder(formData));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input
            type="text"
            name="workstationId"
            placeholder="Workstation ID"
            value={formData.workstationId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <h3 className="text-lg font-bold">Materials Used</h3>
          {formData.materialsUsed.map((material, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="materialId"
                placeholder="Material ID"
                value={material.materialId}
                onChange={(e) => handleMaterialChange(index, e)}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Qty"
                value={material.quantity}
                onChange={(e) => handleMaterialChange(index, e)}
                className="w-24 p-2 border rounded"
                required
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addMaterial}
            className="w-full bg-gray-500 text-white py-1 rounded"
          >
            + Add Material
          </button>

          <button
            type="submit"
            className={`w-full py-2 rounded ${
              orderStatus === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            disabled={orderStatus === "loading"}
          >
            {orderStatus === "loading" ? "Placing Order..." : "Place Order"}
          </button>
        </form>

        {orderError && <p className="text-red-500 mt-2">{orderError}</p>}
      </div>
    </div>
  );
};

export default OrderForm;
