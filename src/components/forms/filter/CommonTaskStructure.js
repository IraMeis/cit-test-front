import tasks from "../../../util/taskTypes.json";
import Separator from "../../const/Separator";
import React, {useContext} from "react";
import TaskContext from "../../context/TaskContext";
import ModalFilterContext from "../../context/ModalFilterContext";
import MatrixUtil from "../../../util/functions/matrix.build";
import SolveUploadedService from "../../../util/functions/SolveUploaded";
import TaskService from "../../../service/task.service";

const CommonTaskStructure = ({type, typeLabel, uuid, time, arr1, arr2, matrix}) => {

    const modalContext = useContext(ModalFilterContext);
    const taskParams = useContext(TaskContext);

    function handleSolveSquare () {
        TaskService.solveSQ({inputMatrix: matrix, typeCode: type})
            .then((response) =>
                SolveUploadedService.handleSolveSquare(
                    matrix,
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
            modalContext.setErrorMess(err.message);
            modalContext.handleShowModalErr();
        });
    };

    function handleSolveSubstring () {
        TaskService.solveSUB({array1: arr1, array2: arr2, typeCode: type})
            .then((response) =>
                SolveUploadedService.handleSolveSubstring(
                    arr1,
                    arr2,
                    response.data.arrayResult,
                    taskParams.setTaskType,
                    taskParams.setArr1,
                    taskParams.setArr2,
                    taskParams.setArrRes,
                    taskParams.setInputMatrix,
                    taskParams.setOutputMatrix,
                    modalContext.handleClose)
            ).catch((err) => {
            modalContext.setErrorMess(err.message);
            modalContext.handleShowModalErr();
        });
    };

    return(
        <div className="bg-light col g-5">
            <div className="col-md-12">

                <Separator.Separator2/>

                <strong>Тип:</strong>
                <div>{typeLabel}</div>

                <Separator.Separator1/>

                <strong>Uuid:</strong>
                <div>{uuid}</div>

                <Separator.Separator1/>

                <strong>Время создания:</strong>
                <div>{time}</div>

                <Separator.Separator1/>

                {matrix &&
                (<div>
                    <strong>Входная матрица:</strong>
                    <div>{MatrixUtil.makeMatrixFront(matrix)}</div>
                    <Separator.Separator1/>
                </div>)}

                {arr1 &&
                (<div>
                    <strong>Массив подстрок:</strong>
                    <div>{arr1.join(' ')}</div>
                    <Separator.Separator1/>
                </div>)}

                {arr2 &&
                (<div>
                    <strong>Массив строк:</strong>
                    <div>{arr2.join(' ')}</div>
                    <Separator.Separator1/>
                </div>)}

            </div>

            <div className="col-md-12 text-center">
                <button type="button"
                        onClick={type == tasks.square.code ?
                            () => handleSolveSquare() :
                            (type == tasks.substring.code ?
                                () => handleSolveSubstring() :
                                undefined)}
                        className="btn btn-outline-info btn-block">
                    Посчитать
                </button>

            </div>
            <Separator.Separator3/>
        </div>
    );
}

export default CommonTaskStructure;