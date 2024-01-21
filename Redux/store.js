import { configureStore } from "@reduxjs/toolkit";

// reducers
import selectedProducts from "./features/sectedProducts/selectedProductsSlice";
import productsList from "./features/productsList/productsListSlice";

const store = configureStore({
    reducer: { selectedProducts, productsList },
});

export default store;
