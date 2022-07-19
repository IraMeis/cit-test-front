const UuidInput = ({label, onChangeUuid}) => {
  return(
      <div className="form-group">
          <label>{label}</label>
          <input type="text"
                 className="form-control"
                 id="inputAddress"
                 placeholder={"uuid"}
                 onChange={onChangeUuid}
          />
      </div>
  );
}

export default UuidInput;
