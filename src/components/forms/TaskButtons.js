import {useState} from "react";
import modals from "../../util/modalFilterPair.json";
import ModalFilterBlock from "./filter/ModalFilterBlock";
import ModalFilterContext from "../context/ModalFilterContext";
import ModalInputFileBlock from "./fileinput/ModalInputFileBlock";
import ModalErrorBlock from "./ModalErrorBlock";
import ExportBlock from "./export/ExportBlock";
import ImportBlock from "./fileinput/ImportBlock";
import SolveBlock from "./solve/SolveBlock";

const TaskButtons = () => {

    const [modalButtonsState, setModalButtonsState] = useState(modals.close);
    const [modalButtonsStatePrev, setModalButtonsStatePrev] = useState(modals.close);
    const [errorMess, setErrorMess] = useState("");

    //модалки кнопки выгрузки из бд
    const handleShowModalF = () => {
        setModalButtonsStatePrev(modalButtonsState);
        setModalButtonsState(modals.filter);
    }
    const handleShowModalR = () => {
        setModalButtonsStatePrev(modalButtonsState);
        setModalButtonsState(modals.resultFilter);
    }

    //модалка ошибки
    const handleShowModalErr = () =>  {
        setModalButtonsStatePrev(modalButtonsState);
        setModalButtonsState(modals.errorCommon);
    }

    //закрытие всех модалок кнопок
    const handleClose = () => {
        setModalButtonsStatePrev(modalButtonsState);
        setModalButtonsState(modals.close);
    }

    //модалки кнопки выгрузки из файла
    const handleShowModalInputFile = () => {
        setModalButtonsStatePrev(modalButtonsState);
        setModalButtonsState(modals.fileInput);
    }

    const handleShowModalPrev = () => {
        let prev = modalButtonsStatePrev;
        setModalButtonsStatePrev(modalButtonsState);
        setModalButtonsState(prev);
    }

  return(
      <ModalFilterContext.Provider value={{
          setErrorMess : setErrorMess,
          handleShowModalF : handleShowModalF,
          handleShowModalErr : handleShowModalErr,
          handleShowModalR : handleShowModalR,
          handleClose : handleClose,
          handleShowModalInputFile : handleShowModalInputFile,
          handleShowModalPrev : handleShowModalPrev
      }}>
      <div>
          <ModalFilterBlock modalFilterState={modalButtonsState}/>
          <ModalInputFileBlock modalFileInputState={modalButtonsState}/>
          <ModalErrorBlock modalErrorState={modalButtonsState}
                           errorMess ={errorMess}
                           handleCloseError={handleShowModalPrev}/>
          <div>
              <SolveBlock/>
              <hr/>
              <ExportBlock/>
              <hr/>
              <ImportBlock handleShowModalF={handleShowModalF}
                           handleShowModalInputFile={handleShowModalInputFile}/>
          </div>
      </div>
      </ModalFilterContext.Provider>
  );
}

export default TaskButtons;
