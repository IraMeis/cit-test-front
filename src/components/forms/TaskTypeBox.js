import types from "../../util/taskTypes.json";
import React from "react";

const TaskTypeBox = ({type, onChange}) => {
    return (
        <div className="form-group row g-5">
            <div className="col-md-2"/>
            <div className=" col-md-5">
                <select className="form-control form-control-lg"
                        onChange={onChange}
                        value={type}>
                    <option value={types.square.code}>{types.square.label}</option>
                    <option value={types.substring.code}>{types.substring.label}</option>
                </select>
            </div>
            <div className="col-md-5"/>
        </div>
    );
}

export default TaskTypeBox;
