import modals from "../../util/modalFilterPair.json";
import React from "react";
import ModalInfo from "./ModalInfo";

const ModalInfoBlock = ({modalInfoState, infoMess, handleCloseInfo}) => {

    return(
        <div>
            {modalInfoState === modals.infoCommon && <ModalInfo handleClose={handleCloseInfo}
                                                                   message={infoMess}
                                                                   show={modalInfoState === modals.infoCommon}/>}
        </div>
    );
}

export default ModalInfoBlock;