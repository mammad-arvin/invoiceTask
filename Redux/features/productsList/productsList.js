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
});

export default productsList.reducer;
