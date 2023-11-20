export default ({make, name, url}) => {
    return (
        <div className="cell-wrapper-quartz">
            <img src={url}></img>
            <div className="cell-name-quartz">{name}</div>
            <div className="cell-make-quartz">{make}</div>
        </div>
    )
}