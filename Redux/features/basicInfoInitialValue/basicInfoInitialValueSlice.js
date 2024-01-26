const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    costCenter: ["Delinternet", "GreatHearte", "Upinternet"],
    marketer: ["Elahi", "Sedigi", "Nikan"],
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
        addNewItem: (state, action) => {
            console.log(action.payload);
            const findProd = state[action.payload.itemKey].findIndex(
                (prod) => prod === action.payload.item
            );
            if (findProd < 0) {
                state[action.payload.itemKey].push(action.payload.item);
            }
        },
    },
});

export default basicInfoInitialValue.reducer;
export const { addNewItem } = basicInfoInitialValue.actions;

export const selectbasicInfoInitialValue = (store) =>
    store.basicInfoInitialValue;
