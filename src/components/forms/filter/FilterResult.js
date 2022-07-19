import React, {createContext, useContext} from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import types from "../../../util/taskTypes.json";
import ModalFilterContext from "../../context/ModalFilterContext";
import tasks from "../../../util/taskTypes.json";
import CommonTaskStructure from "./CommonTaskStructure";

const ResponseParams = createContext(null);

const ModalFilterResult = ({show, responseData}) => {

    const modalContext = useContext(ModalFilterContext);

    const ResultList = (props) => {
        if(props.typeCode && props.typeCode === types.square.code &&
            props.inputMatrix && props.inputMatrix.length === tasks.square.matrixSize*tasks.square.matrixSize)
            return (<CommonTaskStructure typeLabel={"Задача магического квадрата"}
                                     type={props.typeCode}
                                     time={props.createdTimestamp}
                                     uuid={props.uuid}
                                     matrix={props.inputMatrix}/>);
        else if(props.typeCode && props.typeCode === types.substring.code &&
            props.array1 && props.array2 && props.array1.length > 0 && props.array2.length > 0)
            return (<CommonTaskStructure typeLabel={"Задача подстроки"}
                                     type={props.typeCode}
                                     time={props.createdTimestamp}
                                     uuid={props.uuid}
                                     arr1={props.array1}
                                     arr2={props.array2}/>);
    }

    function MapperTasks (){
        return (
            <div className="container">
                {useContext(ResponseParams).map(ResultList)}
            </div>
        );
    }

    return (
        <ResponseParams.Provider value={responseData}>
        <Modal show={show} onHide={modalContext.handleShowModalF} backdrop="static">
            <Modal.Header>
                <Modal.Title>Результат поиска</Modal.Title>
                <button type="button" className="close" data-dismiss="modal" onClick={modalContext.handleShowModalF}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>

            <Modal.Body>
                <MapperTasks/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={modalContext.handleShowModalF}>
                    Отмена
                </Button>
            </Modal.Footer>
        </Modal>
        </ResponseParams.Provider>
    );

};

export default ModalFilterResult;
