import { configureStore } from "@reduxjs/toolkit";

// reducers
import inProgressReduce from "./features/sectedProducts/inProgressSlice";
import productsList from "./features/productsList/productsListSlice";

const store = configureStore({
    reducer: { inProgressReduce, productsList },
});

export default store;
