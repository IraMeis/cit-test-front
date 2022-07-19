import tasks from "../taskTypes.json";

const makeMatrixStrings = (mtrx, n) => {
    let matrStrMas = [];
    let tempString="";
    for (let i = 0; i < mtrx.length; i+=n) {
        for (let k = 0; k < n; ++k)
            tempString += mtrx[i+k] + " ";
        matrStrMas.push(tempString.substring(0, tempString.length - 1));
        tempString="";
    }
    return matrStrMas;
}

const makeMatrixFront = (mtrx) => {
    let matrStr = makeMatrixStrings(mtrx, tasks.square.matrixSize);
    return(matrStr.map((elem) => <div>{elem}</div>));
}

const MatrixUtil = {
    makeMatrixFront,
    makeMatrixStrings
}

export default MatrixUtil;
