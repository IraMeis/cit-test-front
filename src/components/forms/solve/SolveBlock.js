import TaskService from "../../../service/task.service";
import SolveUploadedService from "../../../util/functions/SolveUploaded";
import {useContext} from "react";
import ModalFilterContext from "../../context/ModalFilterContext";
import TaskContext from "../../context/TaskContext";
import tasks from "../../../util/taskTypes.json";
import StringToObj from "../../../util/functions/StringToObj";
import types from "../../../util/taskTypes.json";
import strData from "../../../util/stringMessages.json";

const SolveBlock = () => {

    const modalContext = useContext(ModalFilterContext);
    const taskParams = useContext(TaskContext);

    function openErr(str) {
        modalContext.setErrorMess(str);
        modalContext.handleShowModalErr();
    }

    function setErrorResp (err) {
        if(err.response && err.response.status && err.response.status === 406)
            openErr(strData.errorDataBackIn);
        else
            openErr(err.message);
    }

    function checkArraysIsNotEmpty() {
        return taskParams.arr1.length && taskParams.arr1.length > 0
            && taskParams.arr2 && taskParams.arr2.length > 0;
    }

    function checkMatrixIsNotEmpty () {
        return taskParams.inputMatrix && taskParams.inputMatrix.length > 0;
    }

    function handleSolveSquare () {
        if(!checkMatrixIsNotEmpty() ||
            StringToObj.stringIntoMatrix(taskParams.inputMatrix).length === 0){
            openErr(strData.errorDataFront);
        }
        else
            TaskService.solveSQ({
                inputMatrix: StringToObj.stringIntoMatrix(taskParams.inputMatrix),
                typeCode: types.square.code})
                .then((response) =>
                    SolveUploadedService.handleSolveSquare(
                        response.data.inputMatrix,
                        response.data.outputMatrix,
                        taskParams.setTaskType,
                        taskParams.setArr1,
                        taskParams.setArr2,
                        taskParams.setArrRes,
                        taskParams.setInputMatrix,
                        taskParams.setOutputMatrix,
                        modalContext.handleClose,
                        response.data.cost)
                ).catch((err) => {
                setErrorResp(err);
            });
    }

    function handleSolveSubstring () {
        if(!checkArraysIsNotEmpty() ||
            StringToObj.stringIntoStringArray(taskParams.arr1).length === 0 ||
            StringToObj.stringIntoStringArray(taskParams.arr2).length === 0 ){
            openErr(strData.errorDataFront);
        }
        else
            TaskService.solveSUB({
                array1 : StringToObj.stringIntoStringArray(taskParams.arr1),
                array2 : StringToObj.stringIntoStringArray(taskParams.arr2),
                typeCode : types.substring.code})
                .then((response) =>
                    SolveUploadedService.handleSolveSubstring(
                        response.data.array1,
                        response.data.array2,
                        response.data.arrayResult,
                        taskParams.setTaskType,
                        taskParams.setArr1,
                        taskParams.setArr2,
                        taskParams.setArrRes,
                        taskParams.setInputMatrix,
                        taskParams.setOutputMatrix,
                        modalContext.handleClose)
                ).catch((err) => {
                    setErrorResp(err);
            });
    }

  return(
      <div>
          <button type="button"
                  onClick={taskParams.taskType == tasks.square.code ?
                      () => handleSolveSquare() :
                      (taskParams.taskType == tasks.substring.code ?
                          () => handleSolveSubstring() :
                          undefined)}
                  className="btn btn-outline-dark btn-block">
          Посчитать
          </button>
      </div>)
};

export default SolveBlock;