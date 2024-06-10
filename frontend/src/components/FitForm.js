import { useState } from "react"

const FitForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const fit = {title, load, reps}

        const response = await fetch('/api/fit', {
            method: 'POST',
            body: JSON.stringify(fit),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new fit log added')
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Fit Log</h3>

            <label>Exercise Title:</label>
            <input
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in kg):</label>
            <input
                type = "number"
                onChange = {(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps:</label>
            <input
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Fit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default FitForm