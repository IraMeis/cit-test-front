const UuidInput = ({label, onChangeUuid, value}) => {
  return(
      <div className="form-group">
          <label>{label}</label>
          <input type="text"
                 className="form-control"
                 id="inputAddress"
                 placeholder={"uuid"}
                 value={value}
                 onChange={onChangeUuid}
          />
      </div>
  );
}

export default UuidInput;
