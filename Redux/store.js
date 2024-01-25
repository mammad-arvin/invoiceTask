import { configureStore } from "@reduxjs/toolkit";

// reducers
import inProgressReduce from "./features/sectedProducts/inProgressSlice";
import productsList from "./features/productsList/productsListSlice";
import basicInfoInitialValue from "./features/basicInfoInitialValue/basicInfoInitialValueSlice";

const store = configureStore({
    reducer: { inProgressReduce, productsList, basicInfoInitialValue },
});

export default store;
