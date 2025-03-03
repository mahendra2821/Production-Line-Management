import api from "./api";

// Fetch all orders
export const fetchOrders = async () => {
    const response = await api.get("/orders");
    return response.data;
};

// Create a new order (Managers only)
export const createOrder = async (orderData) => {
    const response = await api.post("/orders", orderData);
    return response.data;
};

// Update order status (Operators or Managers)
export const updateOrderStatus = async (id, status) => {
    const response = await api.put(`/orders/${id}/status`, { status });
    return response.data;
};

// Delete an order (Managers only)
export const deleteOrder = async (id) => {
    await api.delete(`/orders/${id}`);
    return id;
    
};
