import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import globalFilter from './slices/globalFilterSlice'

const combinedReducer = combineReducers({
  globalFilter
});

const masterReducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            // globalFilter: {
            //     dateFilter: state,
            // },
        }
        return nextState;
    } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });