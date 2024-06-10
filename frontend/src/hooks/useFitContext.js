import { FitContext } from "../context/fitContext";
import { useContext } from "react";

export const useFitContext = () => {
    const context = useContext(FitContext)

    if (!context) {
        throw Error('useFitContext must be used inside an FitContextProvider')
    }

    return context
}

