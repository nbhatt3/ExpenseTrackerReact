import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flowers', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Create a provider Component

export const GlobalProvider = ({ children }) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);

        // Add action  
        function deleteTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            });
        }

        return ( < GlobalContext.Provider value = {
                { transactions: state.transactions, deleteTransaction, addTransaction }
            } > { children } <
            /GlobalContext.Provider>)
        }