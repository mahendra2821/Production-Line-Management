// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";
// // import ordersReducer from "./slices/ordersSlice";
// // import materialsReducer from "./slices/materialsSlice";

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         // orders: ordersReducer,
//         // materials: materialsReducer
//     }
// });


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import ordersReducer from "./slices/ordersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
  },
});

