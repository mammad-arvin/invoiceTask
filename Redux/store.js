import { configureStore } from "@reduxjs/toolkit";

// reducers
import selectedProducts from "./features/sectedProducts/selectedProductsSlice";
import productsList from "./features/productsList/productsList";

const store = configureStore({
    reducer: { selectedProducts, productsList },
});

export default store;
