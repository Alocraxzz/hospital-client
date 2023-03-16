import { combineReducers, configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { patientApi } from './services/PatientService';

const rootReducer = combineReducers({
    [patientApi.reducerPath]: patientApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patientApi.middleware),
});

setupListeners(store.dispatch);