import Separator from "../const/Separator";
import TaskString from "../forms/TaskString";
import TaskSquare from "../forms/TaskSquare";
import React, {useState} from "react";
import TaskTypeBox from "../forms/TaskTypeBox";
import types from "../../util/taskTypes.json";
import TaskButtons from "../forms/TaskButtons";
import TaskContext from "../context/TaskContext";

const Tasks = () => {

    const [taskType, setTaskType] = useState(1);
    const onChangeType = (e) => {
        if(taskType == types.substring.code){
            setArr1('');
            setArr2('');
        }
        else if(taskType == types.square.code)
            setInputMatrix('');

        const sc = e.target.value;
        setTaskType(sc);
    }

    const [arr1, setArr1] = useState("");
    const [arr2, setArr2] = useState("");
    const [inputMatrix, setInputMatrix] = useState("");

    return (
        <TaskContext.Provider value={{
            inputMatrix : inputMatrix,
            arr1 : arr1,
            arr2 : arr2,
            setInputMatrix : setInputMatrix,
            setArr1 : setArr1,
            setArr2 : setArr2,
            taskType : taskType,
            setTaskType : setTaskType}}>
        <div className="container">

            <Separator.Separator1/>

            <TaskTypeBox type={taskType} onChange={onChangeType}/>

            <Separator.Separator1/>

            <div className="row g-5">
                <div className="jumbotron bg-light col-md-9">
                    {taskType == types.substring.code && <TaskString/>}
                    {taskType == types.square.code && <TaskSquare/>}
                </div>
                <div className="jumbotron col-md-3 text-center">
                    <TaskButtons/>
                </div>
            </div>

        </div>
        </TaskContext.Provider>
    );
};
export default Tasks;
