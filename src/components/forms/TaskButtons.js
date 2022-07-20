import {useState} from "react";
import modals from "../../util/modalFilterPair.json";
import ModalFilterBlock from "./filter/ModalFilterBlock";
import ModalFilterContext from "../context/ModalFilterContext";
import ModalInputFileBlock from "./fileinput/ModalInputFileBlock";
import ModalErrorBlock from "./ModalErrorBlock";

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
              <button type="button" className="btn btn-outline-dark btn-block">
                  Посчитать</button>
              <hr/>
              <button type="button" className="btn btn-outline-info btn-block">
                  Сохранить</button>
              <button type="button"
                      onClick={handleShowModalF}
                      className="btn btn-outline-info btn-block">
                  Загрузить</button>
              <button type="button" className="btn btn-outline-info btn-block">
                  Экспортировать</button>
              <button type="button"
                      onClick={handleShowModalInputFile}
                      className="btn btn-outline-info btn-block">
                  Импортировать</button>
          </div>
      </div>
      </ModalFilterContext.Provider>
  );
}

export default TaskButtons;
