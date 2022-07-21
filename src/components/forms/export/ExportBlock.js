import {useContext} from "react";
import TaskContext from "../../context/TaskContext";
import types from "../../../util/taskTypes.json";
import FileService from "../../../service/file.service";
import fileDownload from 'js-file-download';
import ModalFilterContext from "../../context/ModalFilterContext";
import StringToObj from "../../../util/functions/StringToObj";

const ExportBlock = () => {

    const taskParams = useContext(TaskContext);
    const modalContext = useContext(ModalFilterContext);

    function openErr(str) {
        modalContext.setErrorMess(str);
        modalContext.handleShowModalErr();
    }

    function setErrorResp (err) {
        if(err.response && err.response.status && err.response.status === 406)
            openErr("Server reports of getting incorrect data");
        else
            openErr(err.message);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function name () {
        return getRandomInt(100, 1000000) + ".json";
    }

    function checkArraysIsNotEmpty() {
        return taskParams.arr1.length && taskParams.arr1.length > 0
            && taskParams.arr2 && taskParams.arr2.length > 0;
    }

    function checkMatrixIsNotEmpty () {
        return taskParams.inputMatrix && taskParams.inputMatrix.length > 0;
    }

    const handleExportDB = () => {

    }

    const handleExportFile = () => {
        if(taskParams.taskType == types.substring.code) {
            if(!checkArraysIsNotEmpty() ||
                StringToObj.stringIntoStringArray(taskParams.arr1).length === 0 ||
                StringToObj.stringIntoStringArray(taskParams.arr2).length === 0 ){
                openErr("Некорректные данные!");
            }
            else
                return FileService.downloadFileSUB({
                    array1 : StringToObj.stringIntoStringArray(taskParams.arr1),
                    array2 : StringToObj.stringIntoStringArray(taskParams.arr2),
                    typeCode : types.substring.code})
                    .then((response) => {
                        fileDownload(response.data, types.substring.enLabel + name())
                    }).catch((err) => {
                        setErrorResp(err);
                    });
        }
        else if (taskParams.taskType == types.square.code) {
            if(!checkMatrixIsNotEmpty() ||
                StringToObj.stringIntoMatrix(taskParams.inputMatrix).length === 0){
                openErr("Некорректные данные!");
            }
            else
                return FileService.downloadFileSQ({
                    inputMatrix: StringToObj.stringIntoMatrix(taskParams.inputMatrix),
                    typeCode: types.square.code
                })
                    .then((response) => {
                        fileDownload(response.data, types.square.enLabel + name())
                    }).catch((err) => {
                        setErrorResp(err);
                    });
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-outline-info btn-block">
                Сохранить</button>
            <button type="button"
                    onClick={handleExportFile}
                    className="btn btn-outline-info btn-block">
                Экспортировать</button>
        </div>
    );
}

export default ExportBlock;