const FitDetails = ({ fit }) => {
    return (
        <div className="fit-details">
            <h4> { fit.title } </h4>
            <p><strong>Load (kg): </strong>{fit.load}</p>
            <p><strong>Reps: </strong>{fit.reps}</p>
            <p>{fit.createdAt}</p>
        </div>
    )
}

export default FitDetails