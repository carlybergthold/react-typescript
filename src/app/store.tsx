import { configureStore } from '@reduxjs/toolkit';
import loansReducer from '../features/loans/loansSlice';
import budgetsReducer from '../features/budgets/budgetsSlice';
import collateralReducer from '../features/collateral/collateralSlice';

export const store = configureStore({
    reducer: {
        loans: loansReducer,
        budgets: budgetsReducer,
        collateral: collateralReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;