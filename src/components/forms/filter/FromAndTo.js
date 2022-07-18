const FromAndTo = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">from</label>
                    <input type="date"
                           className="form-control"
                           onChange={props.handleFrom}/>
                </div>
                <div className="form-group col-md-2"/>
                <div className="form-group col-md-5">
                    <label htmlFor="inputPassword4">to</label>
                    <input type="date"
                           className="form-control"
                           onChange={props.handleTo}/>
                </div>
            </div>
        </div>
    );
}

export default FromAndTo;
