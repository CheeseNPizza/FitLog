import { useEffect, useState } from "react"

import FitDetails from '../components/FitDetails'
import FitForm from "../components/FitForm"

const Home = () => {
    const [fits, setFits] = useState(null)

    useEffect(() => {
        const fetchFits = async () => {
            const response = await fetch('/api/fit')
            const json = await response.json()

            if (response.ok) {
                setFits(json)
            }
        }

        fetchFits()
    }, [])

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