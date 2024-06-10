import { useEffect } from "react"
import { useFitContext } from '../hooks/useFitContext'

import FitDetails from '../components/FitDetails'
import FitForm from "../components/FitForm"

const Home = () => {
    const {fits, dispatch} = useFitContext()

    useEffect(() => {
        const fetchFits = async () => {
            const response = await fetch('/api/fit')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_FIT', payload: json})
            }
        }

        fetchFits()
    }, [dispatch])

    return (
        <div className="home">
            <div className = "fit">
                {fits && fits.map( fit => {
                    return <FitDetails key = {fit._id} fit = {fit} />
                })}
            </div>

            <FitForm />
        </div>
    )
}

export default Home