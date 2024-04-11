import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";
const appStore = configureStore({
    reducer: {
        cart: cardReducer,
    }
});

export default appStore;

// Step1: creating our store
// Step2: Providing the store to our app
// Step3: creating the slice
// Step4: exporting the reducers and actions from slcie
// Step5: provide the reducers to our store