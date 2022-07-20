import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useContext, useState} from "react";
import ModalFilterContext from "../../context/ModalFilterContext";
import FileService from "../../../service/file.service";
import TaskContext from "../../context/TaskContext";
import SolveUploadedService from "../../../util/functions/SolveUploaded";
import tasks from "../../../util/taskTypes.json";

const ModalFileInputForm = ({show}) => {

    const modalContext = useContext(ModalFilterContext);
    const taskParams = useContext(TaskContext);

    const [currentFile, setCurrentFile] = useState();
    const [currentFileName, setCurrentFileName] = useState("");
    const selectFile = (event) => {
        const file = event.target.files[0];
        setCurrentFile(file);
        setCurrentFileName(file.name);
    };

    function showError (message) {
        modalContext.setErrorMess(message);
        setCurrentFile(undefined);
        setCurrentFileName("");
        modalContext.handleShowModalErr();
    }

     const handleUpload = () => {
        FileService.uploadFile(currentFile, currentFileName)
            .then((response) => {
                if(response.data) {
                    if(response.data.typeCode && response.data.typeCode===tasks.square.code &&
                        response.data.inputMatrix &&
                        response.data.inputMatrix.length===tasks.square.matrixSize*tasks.square.matrixSize)
                        SolveUploadedService.handleSolveSquare(
                            response.data.inputMatrix,
                            taskParams.setTaskType,
                            taskParams.setArr1,
                            taskParams.setArr2,
                            taskParams.setInputMatrix,
                            modalContext.handleClose);
                    else if (response.data.typeCode && response.data.typeCode===tasks.substring.code &&
                        response.data.array1 && response.data.array2)
                        SolveUploadedService.handleSolveSubstring(
                            response.data.array1,
                            response.data.array2,
                            taskParams.setTaskType,
                            taskParams.setArr1,
                            taskParams.setArr2,
                            taskParams.setInputMatrix,
                            modalContext.handleClose);
                    else showError("Got invalid data type");
                }
                else showError("Got empty body");
            })
            .catch((err) => {
                if(err.response && err.response.status && err.response.status === 406)
                    showError("Get incorrect data from file");
                else
                    showError(err.message);
            });
    };

    return (
        <Modal show={show} onHide={modalContext.handleClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>Выберите файл</Modal.Title>
                <button type="button" className="close" data-dismiss="modal" onClick={modalContext.handleClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>

                <label>
                    <div> {"Максимальный размер файла 128 Кб."}</div>
                    <div>{"Ожидаемый формат JSON."}</div>
                </label>
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <div className="custom-file">
                        <input
                            type="file"
                            onChange={selectFile}
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            {currentFileName}
                        </label>
                    </div>
                </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={modalContext.handleClose}>
                    Отмена
                </Button>
                <Button variant="primary"
                        disabled={!currentFile}
                        onClick={handleUpload}>
                    Ок
                </Button>
            </Modal.Footer>

        </Modal>

    );
}

export default ModalFileInputForm;