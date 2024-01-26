const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: [
        { name: "Magnetic Paper", price: 24, weight: 4 },
        { name: "Paper", price: 102, weight: 5 },
        { name: "Easy Cheese", price: 107, weight: 8.6 },
        { name: "Doritos", price: 64, weight: 2 },
        { name: "Magnetic", price: 59, weight: 3.4 },
    ],
    warehouse: ["Deltebre", "Rezaie", "Ahmadi"],
    bin: ["A89", "A44", "C21"],
    tax: [31, 50, 23, 11],
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
