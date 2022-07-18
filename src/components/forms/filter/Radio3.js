const Radio3 = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       value="1"
                       type="radio"
                       name={`Radio3${props.id}`}
                       id="flexRadioDefault1"
                       onChange={props.ch}
                       checked={props.chval === 1}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">{props.l1}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       value="2"
                       type="radio"
                       name={`Radio3${props.id}`}
                       id="flexRadioDefault2"
                       onChange={props.ch}
                       checked={props.chval === 2}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">{props.l2}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       value="3"
                       type="radio"
                       name={`Radio3${props.id}`}
                       id="flexRadioDefault3"
                       onChange={props.ch}
                       checked={props.chval === 3}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">{props.l3}</label>
            </div>
        </div>
    );
}

export default Radio3;
