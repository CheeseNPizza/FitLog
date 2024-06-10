import { useFitContext } from "../hooks/useFitContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const FitDetails = ({ fit }) => {
    const { dispatch } = useFitContext()

    const handleClick = async () => {
        const response = await fetch('/api/fit/' + fit._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_FIT', payload: json})
        }
    }

    return (
        <div className="fit-details">
            <h4> { fit.title } </h4>
            <p><strong>Load (kg): </strong>{fit.load}</p>
            <p><strong>Reps: </strong>{fit.reps}</p>
            <p>{formatDistanceToNow(new Date(fit.createdAt), { addSuffix: true })}</p>
            <span className = "material-symbols-outlined" onClick={ handleClick }>delete</span>
        </div>
    )
}

export default FitDetails