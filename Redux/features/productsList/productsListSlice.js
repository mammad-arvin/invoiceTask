const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: [
        { name: "Magnetic Paper", price: 24 },
        { name: "Paper", price: 102 },
        { name: "Easy Cheese", price: 107 },
        { name: "Doritos", price: 64 },
        { name: "Magnetic", price: 59 },
    ],
    warehouse: ["Deltebre", "Rezaie", "Ahmadi"],
    bin: ["A89"],
    tax: ["IVA-IRPF"],
};

const productsList = createSlice({
    name: "productsList",
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            const findProd = state.products.findIndex(
                (prod) => prod.name === action.payload.product[0].name
            );
            if (findProd < 0) {
                state.products.push(action.payload.product[0]);
                state.warehouse.push(action.payload.warehouse);
                state.bin.push(action.payload.bin);
                state.tax.push(action.payload.tax);
            }
        },
    },
});

export default productsList.reducer;
export const { addNewProduct } = productsList.actions;
