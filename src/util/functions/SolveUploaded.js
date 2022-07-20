import types from "../taskTypes.json";
import MatrixUtil from "./matrix.build";
import tasks from "../taskTypes.json";

const handleSolveSquare = (matrix, setTaskType, setArr1, setArr2, setInputMatrix, handleClose) => {
    setTaskType(types.square.code);
    setArr1('');
    setArr2('');
    setInputMatrix(MatrixUtil.makeMatrixStrings(matrix, tasks.square.matrixSize).join('\n'));
    handleClose();
};

const handleSolveSubstring = (arr1, arr2, setTaskType, setArr1, setArr2, setInputMatrix, handleClose) => {
    setTaskType(types.substring.code);
    setInputMatrix('');
    setArr1(arr1.join(' '));
    setArr2(arr2.join(' '));
    handleClose();
};

const SolveUploadedService = {
    handleSolveSquare,
    handleSolveSubstring
}

export default SolveUploadedService;