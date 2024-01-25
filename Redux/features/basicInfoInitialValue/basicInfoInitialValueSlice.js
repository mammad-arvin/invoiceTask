const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    costCenter: ["Delinternet", "GreatHearte", "Upinternet"],
    marketer: ["14", "2", "23"],
    marketerShare: [9, 13, 21, 10, 5],
    discount: [21, 13, 5, 7],
    client: ["Raul Bento", "Arvin", "Asal Rezaie"],
    warehouse: ["Deltebre", "Delinternet", "Nike"],
    bin: ["A86", "C43", "Q79"],
};

const basicInfoInitialValue = createSlice({
    name: "basicInfoInitialValue",
    initialState,
    reducers: {
        addNewClinet: (state, action) => {
            const findProd = state.Client.findIndex(
                (prod) => prod === action.payload
            );
            if (findProd < 0) {
                state.client.push(action.payload);
            }
        },
    },
});

export default basicInfoInitialValue.reducer;
export const { addNewProduct } = basicInfoInitialValue.actions;

export const selectbasicInfoInitialValue = (store) =>
    store.basicInfoInitialValue;
