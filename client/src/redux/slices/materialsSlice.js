import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMaterials, updateMaterialStock } from "../../services/materialService";

// Fetch materials
export const fetchMaterialsThunk = createAsyncThunk("materials/fetchMaterials", async (_, { rejectWithValue }) => {
    try {
        return await fetchMaterials();
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Update material stock
export const updateMaterialStockThunk = createAsyncThunk("materials/updateMaterialStock", async ({ id, stock }, { rejectWithValue }) => {
    try {
        return await updateMaterialStock(id, stock);
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Materials Slice
const materialsSlice = createSlice({
    name: "materials",
    initialState: { materials: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMaterialsThunk.pending, (state) => { state.loading = true; })
            .addCase(fetchMaterialsThunk.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.materials = payload;
            })
            .addCase(fetchMaterialsThunk.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(updateMaterialStockThunk.fulfilled, (state, { payload }) => {
                state.materials = state.materials.map(material => material._id === payload._id ? payload : material);
            });
    }
});

export default materialsSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Mock API Call
// export const fetchMaterials = createAsyncThunk("materials/fetchMaterials", async () => {
//     return [
//         { id: 1, name: "Iron Ore", quantity: 200 },
//         { id: 2, name: "Copper Wire", quantity: 75 },
//     ];
// });

// const materialsSlice = createSlice({
//     name: "materials",
//     initialState: {
//         materials: [],
//         loading: false,
//     },
//     reducers: {
//         addMaterial: (state, action) => {
//             state.materials.push({ id: Date.now(), ...action.payload });
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchMaterials.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchMaterials.fulfilled, (state, action) => {
//                 state.materials = action.payload;
//                 state.loading = false;
//             });
//     },
// });

// export const { addMaterial } = materialsSlice.actions;
// export default materialsSlice.reducer;

