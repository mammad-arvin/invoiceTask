const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const SelectedProductSlice = createSlice({
    name: "selectedProuduct",
    initialState,
    reducers: {
        submitSelect: (state, action) => {
            const findProd = state.findIndex(
                (prod) => prod.product === action.payload.product
            );
            if (findProd >= 0) {
                state[findProd].qty++;
                state[findProd].total =
                    state[findProd].price * state[findProd].qty;
                state[findProd].totalWeight =
                    state[findProd].totalWeight + state[findProd].weight;
            } else {
                state.push(action.payload);
            }
        },
        deleteProduct: (state, action) => {
            const findProd = state.findIndex(
                (prod) => prod.product === action.payload
            );

            if (findProd >= 0) {
                state.splice(findProd, 1);
            }
        },
        editeSelectedProduct: (state, action) => {
            const findProd = state.findIndex(
                (prod) => prod.product === action.payload.product
            );
            if (findProd >= 0) {
                state[findProd].qty = action.payload.qty;
                state[findProd].total =
                    state[findProd].price * action.payload.qty;
                state[findProd].totalWeight =
                    state[findProd].weight * state[findProd].qty;
            }
        },
    },
});

export default SelectedProductSlice.reducer;
export const { submitSelect, deleteProduct, editeSelectedProduct } =
    SelectedProductSlice.actions;
