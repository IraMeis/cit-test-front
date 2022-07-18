const UuidInput = (props) => {
  return(
      <div className="form-group">
          <label>{props.label}</label>
          <input type="text"
                 className="form-control"
                 id="inputAddress"
                 placeholder={"uuid"}
                 onChange={props.onChangeUuid}
          />
      </div>
  );
}

export default UuidInput;
