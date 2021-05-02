import React, {createContext, useReducer} from 'react';

// Initial State
const initialState ={
    transactions : [
        {id:1 , text: 'Car', amount: 75000},
        {id:1 , text: 'Car', amount: 75000},
        {id:1 , text: 'Car', amount: 75000},
        {id:1 , text: 'Car', amount: 75000},
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider =({children}) => {
    
}