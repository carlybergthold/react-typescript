import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CollateralState {
  value: number;
}

export const collateralSlice = createSlice({
  name: 'collateral',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state: CollateralState, action: any) => {
      state.value += action.payload
    }
  }
})

export const { increment } = collateralSlice.actions
export const selectCount = (state: RootState) => state.value;

export default collateralSlice.reducer