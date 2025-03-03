import { createAction, createReducer } from '@reduxjs/toolkit'
            
const calculate = createAction('CALCULATE');
const initialState = {mortgage: '', mortgageTerm: '', interestRate: '', mortgageType: ''}

const counterReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
  builder
    .addCase(calculate, (state, action) => {                           
      state.mortgage = action.payload.mortgage;
      state.mortgageTerm = action.payload.mortgageTerm;
      state.interestRate = action.payload.interestRate;
      state.mortgageType = action.payload.mortgageType;
    })
})

export default counterReducer;