import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    value:[]
}

let todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
        remove: (state, action) => {
            state.value = state.value.filter((value) => {
                return value.id!=action.payload
            })
        },
        changeStatus :(state, action) => {
            
        }
    }
})

export default todoSlice.reducer
export let {add,remove,changeStatus}=todoSlice.actions