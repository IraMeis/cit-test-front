import modals from "../../util/modalFilterPair.json";
import ModalError from "./ModalError";
import React from "react";

const ModalErrorBlock = ({modalErrorState, errorMess, handleCloseError}) => {

    return(
        <div>
            {modalErrorState === modals.errorCommon && <ModalError handleCloseErr={handleCloseError}
                                            errorMess ={errorMess}
                                            show={modalErrorState === modals.errorCommon}/>}
        </div>
  );
}

export default ModalErrorBlock;