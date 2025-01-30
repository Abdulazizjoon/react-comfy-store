import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    value:[]
}
let cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state,action) => {
            let product = state.value.find((item) => {
                return item.id==action.payload.id&&item.color==action.payload.color
            })
            if (product) {
                state.value.map((item,index) => {
                    if (item.id==action.payload.id&&item.color==action.payload.color) {
                        item.count += Number(action.payload.count);
                    }
                    return item
                })
            }
            else {
                state.value.push(action.payload)
            }
        },
        edit: (state,action) => {
            state.value = state.value.map((item) => {
                if (item.color==action.payload.color&&item.id==action.payload.id) {
                    item.count==action.payload.count
                }
                return item
            })
        },
        remove: (state,action) => {
            state.value==state.value.filter((item) => {
                return item.id!=action.payload.id && item.color!=action.payload.color      
            })
        },
    }
})

export default cart.reducer;
export let { add, edit, remove } = cart.actions;