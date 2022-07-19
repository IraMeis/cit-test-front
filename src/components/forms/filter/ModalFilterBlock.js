import modals from "../../../util/modalFilterPair.json";
import ModalFilter from "./ModalFilter";
import ModalError from "../ModalError";
import ModalFilterResult from "./FilterResult";
import React, {useContext, useState} from "react";
import ModalFilterContext from "../../context/ModalFilterContext";

const ModalFilterBlock = ({modalState}) => {

    const [errorMess, setErrorMess] = useState("");
    const [responseData, setResponseData] = useState([]);
    const modalContext = useContext(ModalFilterContext);

  return(
      <div>
          {modalState === modals.filter && <ModalFilter setErrorMess ={setErrorMess}
                                                        setResponseData={setResponseData}
                                                        show={modalState === modals.filter}/>}

          {modalState === modals.error && <ModalError handleCloseErr={modalContext.handleShowModalF}
                                                      errorMess ={errorMess}
                                                      show={modalState === modals.error}/>}

          {modalState === modals.result && <ModalFilterResult responseData={responseData}
                                                              show={modalState === modals.result} />}
      </div>
  );
}

export default ModalFilterBlock;
