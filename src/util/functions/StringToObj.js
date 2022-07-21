import types from "../taskTypes.json";

const stringIntoMatrix = (str) =>{
    const arr = stringIntoStringArray(str);

    if(arr.length !== types.square.matrixSize*types.square.matrixSize)
        return[];

    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!/^\d+$/.test(arr[i])) {
            return [];
        }
        else
            res.push(parseInt(arr[i]));
    }
    return res;
}

const stringIntoStringArray = (str) => {
    const arr0 = str.split(/[\s\n\r]+/);
    let res = [];
    for (let i = 0; i < arr0.length; ++i)
        if(!(arr0[i] === ""))
            res.push(arr0[i]);
    return res;
}

const StringToObj = {
    stringIntoStringArray,
    stringIntoMatrix
}

export default StringToObj;