import types from "../../../util/taskTypes.json";
import tasks from "../../../util/taskTypes.json";
import Separator from "../../const/Separator";
import React, {useContext} from "react";
import TaskContext from "../../context/TaskContext";
import ModalFilterContext from "../../context/ModalFilterContext";
import MatrixUtil from "../../../util/functions/matrix.build";

const CommonTaskStructure = ({type, typeLabel, uuid, time, arr1, arr2, matrix}) => {

    const modalContext = useContext(ModalFilterContext);
    const taskParams = useContext(TaskContext);

    const handleSolveSquare = () => {
        taskParams.setTaskType(types.square.code);
        taskParams.setArr1('');
        taskParams.setArr2('');
        taskParams.setInputMatrix(MatrixUtil.makeMatrixStrings(matrix, tasks.square.matrixSize).join('\n'));
        modalContext.handleClose();
    };

    const handleSolveSubstring = () => {
        taskParams.setTaskType(types.substring.code);
        taskParams.setInputMatrix('');
        taskParams.setArr1(arr1.join(' '));
        taskParams.setArr2(arr2.join(' '));
        modalContext.handleClose();
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
                        onClick={type == types.square.code ?
                            handleSolveSquare :
                            (type == types.substring.code ? handleSolveSubstring : undefined)}
                        className="btn btn-outline-info btn-block">
                    Посчитать
                </button>

            </div>
            <Separator.Separator3/>
        </div>
    );
}

export default CommonTaskStructure;