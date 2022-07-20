import modals from "../../../util/modalFilterPair.json";
import ModalFileInputForm from "./ModalFileInputForm";

const ModalInputFileBlock = ({modalFileInputState}) => {

    return(
        <div>
            {modalFileInputState === modals.fileInput && <ModalFileInputForm
                                                          show={modalFileInputState === modals.fileInput}/>}
        </div>
    );
}

export default ModalInputFileBlock;