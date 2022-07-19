import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useContext, useState} from "react";
import UuidInput from "./UuidInput";
import FromAndTo from "./FromAndTo";
import Radio3 from "./Radio3";
import FilterService from "../../../service/filter.service";
import makeSearchRequest from "./filter.creator";
import ModalFilterContext from "../../context/ModalFilterContext";

const ModalFilter = ({show, setResponseData, setErrorMess}) => {

    const modalContext = useContext(ModalFilterContext);

    const [uuid, setUuid] = useState("");
    const onChangeUuid = (e) => {
        const content = e.target.value;
        setUuid(content);
    };

    const [dfrom, setDfrom] = useState();
    const onChangeDfrom = (e) => {
        const content = e.target.value;
        setDfrom(content);
    };
    const [dto, setDto] = useState();
    const onChangeDto = (e) => {
        const content = e.target.value;
        setDto(content);
    };

    const [valueType, setValueType] = useState(3);
    const changeValueType = (e) => {
        setValueType(e.target.value);
    };

    const handleFilter = () => {
        FilterService.getFilteredTasks(makeSearchRequest(dfrom, dto, uuid, valueType))
            .then(
                (response) => {
                    setResponseData(response.data);
                    modalContext.handleClose();
                })
            .catch(
                (err) => {
                    setErrorMess(err.message);
                    modalContext.handleShowModalErr();
                })
    };

    return (
        <Modal show={show} onHide={modalContext.handleClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>Выберите параметры для фильтрации</Modal.Title>
                <button type="button" className="close" data-dismiss="modal" onClick={modalContext.handleClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>

            <Modal.Body>

                <UuidInput label={"Uuid задачи"}
                           onChangeUuid={onChangeUuid}/>
                <hr/>

                <FromAndTo
                    label="Дата создания задачи"
                    handleFrom ={onChangeDfrom}
                    handleTo={onChangeDto}/>
                <hr/>

                <Radio3 label={"Тип задачи"} id={"2"}
                                             l1={"Подстроки"} l2={"Магический квадрат"} l3={"Не важно"}
                                             onChange={changeValueType}
                                             changeVal={valueType}/>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={modalContext.handleClose}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={handleFilter}>
                    Поиск
                </Button>
            </Modal.Footer>

        </Modal>
    );
}

export default ModalFilter;
