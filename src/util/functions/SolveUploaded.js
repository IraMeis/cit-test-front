import types from "../taskTypes.json";
import MatrixUtil from "./matrix.build";
import tasks from "../taskTypes.json";

const handleSolveSquare = (matrix, outMatrix,
                           setTaskType,
                           setArr1, setArr2, setArrRes,
                           setInputMatrix, setOutMatrix,
                           handleClose,
                           cost) => {
    setTaskType(types.square.code);
    setArr1('');
    setArr2('');
    setArrRes('');
    setInputMatrix(MatrixUtil.makeMatrixStrings(matrix, tasks.square.matrixSize).join('\n'));
    if(cost === undefined)
        setOutMatrix(MatrixUtil.makeMatrixStrings(outMatrix, tasks.square.matrixSize).join('\n'));
    else
        setOutMatrix(MatrixUtil.makeMatrixStrings(outMatrix, tasks.square.matrixSize).join('\n') +
        "\n\nЦена преобразования: " + cost);
    handleClose();
};

const handleSolveSubstring = (arr1, arr2, arrRes,
                              setTaskType,
                              setArr1, setArr2, setArrRes,
                              setInputMatrix, setOutMatrix,
                              handleClose) => {
    setTaskType(types.substring.code);
    setInputMatrix('');
    setOutMatrix('');
    setArr1(arr1.join(' '));
    setArr2(arr2.join(' '));
    setArrRes(arrRes.join(' '));
    handleClose();
};

const SolveUploadedService = {
    handleSolveSquare,
    handleSolveSubstring
}

export default SolveUploadedService;