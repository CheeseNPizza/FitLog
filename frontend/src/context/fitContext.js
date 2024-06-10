import { createContext, useReducer } from 'react'

export const FitContext = createContext()

export const fitReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIT':
            return {
                fits: action.payload
            }
        case 'CREATE_FIT':
            return {
                fits: [action.payload, ...state.fits]
            }
        case 'DELETE_FIT':
            return {
                fits: state.fits.filter((fit)=>
                    fit._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const FitContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(fitReducer, {
        fits: null
    })

    return (
        <FitContext.Provider value = {{...state, dispatch}}>
            { children }
        </FitContext.Provider>
        
    )
}