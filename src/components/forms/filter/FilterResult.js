import React, {createContext, useContext} from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import types from "../../../util/taskTypes.json";
import Separator from "../../const/Separator";

const ResponseParams = createContext(null);
const CurElemParams = createContext(null);

const ModalFilterResult = (props) => {

    const makeMatrix = (mas) => {
        let matrStr = [];
        for (let i = 0; i < mas.length; i+=3)
            matrStr.push(mas[i] + ' ' + mas[i+1] + ' ' + mas[i+2]);
        return(
            matrStr.map((elem) => <div>{elem}</div>)
        );
    }

    const CommonStructure = (props) => {

        let setTask = useContext(ResponseParams).setTaskFront;
        let close = useContext(ResponseParams).handleClose;
        let setArr1 = useContext(ResponseParams).setArr1;
        let setArr2 = useContext(ResponseParams).setArr2;
        let setMatrix = useContext(ResponseParams).setMatr;

        const handleSolveSquare = () => {
            setTask(types.square.code)
            setArr1('');
            setArr2('');
            setMatrix(props.matrix.join(' '));
            close();
        };

        const handleSolveSubstring = () => {
            setTask(types.substring.code);
            setMatrix('');
            setArr1(props.arr1.join(' '));
            setArr2(props.arr2.join(' '));
            close();
        };

        return(
            <CurElemParams.Provider value={props}>
            <div className="bg-light col g-5">
                <div className="col-md-12">

                    <Separator.Separator2/>

                    <strong>Тип:</strong>
                    <div>{props.typeLabel}</div>

                    <Separator.Separator1/>

                    <strong>Uuid:</strong>
                    <div>{props.uuid}</div>

                    <Separator.Separator1/>

                    <strong>Время создания:</strong>
                    <div>{props.time}</div>

                    <Separator.Separator1/>

                    {props.matrix &&
                    (<div>
                        <strong>Входная матрица:</strong>
                        <div>{makeMatrix(props.matrix)}</div>
                        <Separator.Separator1/>
                    </div>)}

                    {props.arr1 &&
                    (<div>
                        <strong>Массив подстрок:</strong>
                        <div>{props.arr1.join(' ')}</div>
                        <Separator.Separator1/>
                    </div>)}

                    {props.arr2 &&
                    (<div>
                        <strong>Массив строк:</strong>
                        <div>{props.arr2.join(' ')}</div>
                        <Separator.Separator1/>
                    </div>)}

                </div>

                <div className="col-md-12 text-center">
                    <button type="button"
                            onClick={props.type == types.square.code ?
                                handleSolveSquare :
                                props.type == types.substring.code ? handleSolveSubstring : undefined}
                            className="btn btn-outline-info btn-block">
                        Посчитать
                    </button>

                </div>
                <Separator.Separator3/>
            </div>
            </CurElemParams.Provider>
        );
    }

    const ResultList = (props) => {
        if(props.typeCode === types.square.code &&
            props.inputMatrix && props.inputMatrix.length === 9)
            return (<CommonStructure typeLabel={"Задача магического квадрата"}
                                     type={props.typeCode}
                                     time={props.createdTimestamp}
                                     uuid={props.uuid}
                                     matrix={props.inputMatrix}/>);
        else if(props.typeCode === types.substring.code &&
            props.array1 && props.array2 && props.array1.length > 0 && props.array2.length > 0)
            return (<CommonStructure typeLabel={"Задача подстроки"}
                                     type={props.typeCode}
                                     time={props.createdTimestamp}
                                     uuid={props.uuid}
                                     arr1={props.array1}
                                     arr2={props.array2}/>);
    }

    function MapperTasks (){
        return (
            <div className="container">
                {useContext(ResponseParams).response.map(ResultList)}
            </div>
        );
    }

    return (
        <ResponseParams.Provider value={props}>
        <Modal show={props.show} onHide={props.handleCloseR} backdrop="static">
            <Modal.Header>
                <Modal.Title>Результат поиска</Modal.Title>
                <button type="button" className="close" data-dismiss="modal" onClick={props.handleCloseR}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>

            <Modal.Body>
                <MapperTasks/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseR}>
                    Отмена
                </Button>
            </Modal.Footer>

        </Modal>
        </ResponseParams.Provider>
    );

};

export default ModalFilterResult;
