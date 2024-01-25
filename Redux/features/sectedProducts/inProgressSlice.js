const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    basicInfo: { discount: 0 },
    selected: [],
    total: { base: 0, totalWeight: 0, taxes: 0, invoiceProfit: 0, total: 0 },
};

// calculation for all selected product
const Calculations = (state) => {
    state.total.base = state.selected.reduce(
        (sum, item) => (sum += item.total),
        0
    );

    state.total.totalWeight = state.selected.reduce(
        (sum, item) => (sum += item.totalWeight),
        0
    );

    state.total.taxes = state.selected.reduce(
        (sum, item) => (sum += (item.total / 100) * item.tax),
        0
    );

    state.total.invoiceProfit = (
        (state.total.base / 100) *
        state.basicInfo.discount
    ).toFixed(2);

    state.total.total = (
        state.total.base -
        (state.total.base / 100) * state.basicInfo.discount +
        state.total.taxes
    ).toLocaleString();
};

const inProgressSlice = createSlice({
    name: "inProgressData",
    initialState,
    reducers: {
        submitSelect: (state, action) => {
            const findProd = state.selected.findIndex(
                (prod) =>
                    prod.product === action.payload.product &&
                    prod.warehouse === action.payload.warehouse &&
                    prod.bin === action.payload.bin &&
                    prod.tax === action.payload.tax &&
                    prod.bundledUnit === action.payload.bundledUnit
            );
            if (findProd >= 0) {
                state.selected[findProd].qty += action.payload.qty;

                state.selected[findProd].total =
                    state.selected[findProd].price *
                    state.selected[findProd].qty;

                state.selected[findProd].totalWeight =
                    state.selected[findProd].totalWeight +
                    state.selected[findProd].weight;

                state.selected[findProd].description =
                    action.payload.description;

                Calculations(state);
            } else {
                state.selected.push(action.payload);
                Calculations(state);
            }
        },
        deleteProduct: (state, action) => {
            const findProd = state.selected.findIndex(
                (prod) => prod.product === action.payload
            );

            if (findProd >= 0) {
                state.selected.splice(findProd, 1);
                Calculations(state);
            }
        },
        editeSelectedProduct: (state, action) => {
            const findProd = state.selected.findIndex(
                (prod) => prod.product === action.payload.product
            );
            if (findProd >= 0) {
                state.selected[findProd].qty = action.payload.qty;
                state.selected[findProd].total =
                    state.selected[findProd].price * action.payload.qty;
                state.selected[findProd].totalWeight =
                    state.selected[findProd].weight *
                    state.selected[findProd].qty;

                state.selected[findProd].description =
                    action.payload.description;
                state.selected[findProd].tax = action.payload.tax;
                state.selected[findProd].bin = action.payload.bin;
                state.selected[findProd].warehouse = action.payload.warehouse;
                state.selected[findProd].bundledUnit =
                    action.payload.bundledUnit;

                Calculations(state);
            }
        },
    },
});

export default inProgressSlice.reducer;
export const { submitSelect, deleteProduct, editeSelectedProduct } =
    inProgressSlice.actions;

export const selectSelectedProduct = (store) => store.inProgressReduce.selected;

export const selectTotalOFSelectedProduct = (store) =>
    store.inProgressReduce.total;

export const selectBasicInfoSelectedProduct = (store) =>
    store.inProgressReduce.basicInfo;
