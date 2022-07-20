const FromAndTo = ({label, handleFrom, handleTo, valueFrom, valueTo}) => {
    return (
        <div>
            <label>{label}</label>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">с</label>
                    <input type="date"
                           className="form-control"
                           value={valueFrom}
                           onChange={handleFrom}/>
                </div>
                <div className="form-group col-md-2"/>
                <div className="form-group col-md-5">
                    <label htmlFor="inputPassword4">по</label>
                    <input type="date"
                           className="form-control"
                           value={valueTo}
                           onChange={handleTo}/>
                </div>
            </div>
        </div>
    );
}

export default FromAndTo;
