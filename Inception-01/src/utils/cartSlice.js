import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
        //In Older Redux -> DONT NOT MUTATE THE STATE. and return was mandatory.
        // const newState = [...state];
        // newState.items.push(action.payload);
        // return newState;

        //RTK -> Must have to Mutate the State
        // Now its allows because in background redux do take care of this thing.
        // How it does this. Redux uses the ImmerJs library.
        // what is does it that it takes the current state and check the difference between 
        // the new and original state and returns the new Immutable state.

        //  if we do Console.log(state) it return a proxy object.
        // To get the state we have to do console.log(current(state));
        console.log(current(state));
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0;
            
            // we cannot do to update the state because its another array and the array we geting that doesnt changes=> state = []

            // we can also do to mutate the state.
            // RTK says that Either return the state or nothing.
            // return {items: []}
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;