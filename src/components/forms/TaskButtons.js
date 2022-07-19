import {useState} from "react";
import modals from "../../util/modalFilterPair.json";
import ModalFilterBlock from "./filter/ModalFilterBlock";
import ModalFilterContext from "../context/ModalFilterContext";

const TaskButtons = () => {

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

  return(
      <ModalFilterContext.Provider value={{
          handleShowModalF : handleShowModalF,
          handleShowModalErr : handleShowModalErr,
          handleShowModalR : handleShowModalR,
          handleClose : handleClose
      }}>
      <div>
          <ModalFilterBlock modalState={modalState}/>
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
              <button type="button" className="btn btn-outline-info btn-block">
                  Импортировать</button>
          </div>
      </div>
      </ModalFilterContext.Provider>
  );
}

export default TaskButtons;
