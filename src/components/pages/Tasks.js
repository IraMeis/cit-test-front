import Separator from "../const/Separator";
import TaskString from "../forms/TaskString";
import TaskSquare from "../forms/TaskSquare";
import React, {useState} from "react";
import TaskTypeBox from "../forms/TaskTypeBox";

const Tasks = () => {
    const [type, setType] = useState('1');
    const onChangeType = (e) => {
        const sc = e.target.value;
        setType(sc);
    }
    return (
        <div className="container">
            <Separator.Separator1/>
            <TaskTypeBox type={type}
                         change={onChangeType}/>
            <Separator.Separator1/>
            {type==='1' && <TaskString/>}
            {type==='2' && <TaskSquare/>}
        </div>
    );
};
export default Tasks;
