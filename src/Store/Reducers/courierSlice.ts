import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { Courier } from '../../couriers.mock'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const courierSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
})

// export const {  } = courierSlice.actions

export default courierSlice.reducer