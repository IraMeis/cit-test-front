import Separator from "../const/Separator";
import TaskString from "../forms/TaskString";
import TaskSquare from "../forms/TaskSquare";
import React, {useState} from "react";
import TaskTypeBox from "../forms/TaskTypeBox";
import types from "../../util/taskTypes.json";
import modals from "../../util/modalFilterPair.json";
import ModalFilter from "../forms/filter/ModalFilter";
import ModalError from "../forms/ModalError";
import ModalFilterResult from "../forms/filter/FilterResult";
import TaskButtons from "../forms/TaskButtons";

const Tasks = () => {

    const [type, setType] = useState(1);
    const onChangeType = (e) => {
        if(type == types.substring.code){
            setArr1('');
            setArr2('');
        }
        else if(type == types.square.code)
            setInputMatr('');

        const sc = e.target.value;
        setType(sc);
    }

    const [arr1, setArr1] = useState("");
    const [arr2, setArr2] = useState("");
    const [inputMatr, setInputMatr] = useState("");

    const [errMess, setErrMess] = useState("");
    const [respData, setRespData] = useState([]);

    const [modalState, setModalState] = useState(modals.close);
    const handleShowModalF = () => {
        setModalState(modals.filter);
    }
    const handleShowModalErr = () =>  {
        setModalState(modals.error);
    }
    const handleShowModalR = () => {
        setModalState(modals.result);
    }
    const handleClose = () => {
        setModalState(modals.close);
    }

    return (
        <div className="container">
            <Separator.Separator1/>
            <TaskTypeBox type={type}
                         change={onChangeType}/>
            <Separator.Separator1/>

            {modalState === modals.filter && <ModalFilter handleCloseF={handleClose}
                                                          handleShowError ={handleShowModalErr}
                                                          handleShowResult ={handleShowModalR}
                                                          setErr={setErrMess}
                                                          setResp={setRespData}
                                                          show={modalState === modals.filter}/>}

            {modalState === modals.error && <ModalError handleCloseErr={handleShowModalF}
                                                        err={errMess}
                                                        show={modalState === modals.error}/>}

            {modalState === modals.result && <ModalFilterResult handleCloseR={handleShowModalF}
                                                                handleClose={handleClose}
                                                                response={respData}
                                                                show={modalState === modals.result}
                                                                setMatr={setInputMatr}
                                                                setArr1={setArr1}
                                                                setArr2={setArr2}
                                                                setTaskFront={setType} />}
            <div className="row g-5">
                <div className="jumbotron bg-light col-md-9">

                    {type == types.substring.code && <TaskString handleShowModalF={handleShowModalF}
                                                                 arr1={arr1}
                                                                 arr2={arr2}
                                                                 setArr1={setArr1}
                                                                 setArr2={setArr2}/>}

                    {type == types.square.code && <TaskSquare handleShowModalF={handleShowModalF}
                                                              setMatrix={setInputMatr}
                                                              matrix={inputMatr}/>}

                </div>

                <div className="jumbotron col-md-3 text-center">
                    <TaskButtons onClikDownload={handleShowModalF}/>
                </div>
            </div>

        </div>
    );
};
export default Tasks;
