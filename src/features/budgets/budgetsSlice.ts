import { createSlice } from '@reduxjs/toolkit';
import Budget from '../../interfaces/budget';
import { RootState } from '../../app/store';

interface BudgetState {
  totalBudget: number;
  projectBudgets: Budget[]
}

const initialState: BudgetState = {
  totalBudget: 120,
  projectBudgets: [{
    project: 'My First Project',
    amount: 120
  }]
}

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    addProjectBudget: (state: BudgetState, action: any) => {
      state.projectBudgets.push(action.payload)
      state.totalBudget += action.payload.amount
    }
  }
})

export const { addProjectBudget, increment } = budgetsSlice.actions
export const getTotalBudget = (state: RootState) => state.budgets.totalBudget;
export const projectBudgets = (state: RootState) => state.budgets.projectBudgets;

export default budgetsSlice.reducer