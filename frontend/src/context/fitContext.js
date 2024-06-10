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