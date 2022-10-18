import { createSlice } from '@reduxjs/toolkit'

enum filters {
    YTD = "YTD",
    week = "1W",
    month = "1M",
    year = "1Y",
    max = "MAX"
}

const initialState = {
    dateFilter: filters.YTD,
}

export const globalFilterSlice = createSlice({
    name: "globalFilter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.dateFilter = action.payload.dateFilter;
        }
    }
})

export const { setFilter } = globalFilterSlice.actions

export default globalFilterSlice.reducer