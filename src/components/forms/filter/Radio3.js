const Radio3 = ({label, onChange, changeVal, l1, l2, l3, id}) => {
    return(
        <div>
            <label>{label}</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       value="1"
                       type="radio"
                       name={`Radio3${id}`}
                       id="flexRadioDefault1"
                       onChange={onChange}
                       checked={changeVal === 1}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">{l1}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       value="2"
                       type="radio"
                       name={`Radio3${id}`}
                       id="flexRadioDefault2"
                       onChange={onChange}
                       checked={changeVal === 2}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">{l2}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       value="3"
                       type="radio"
                       name={`Radio3${id}`}
                       id="flexRadioDefault3"
                       onChange={onChange}
                       checked={changeVal === 3}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">{l3}</label>
            </div>
        </div>
    );
}

export default Radio3;
