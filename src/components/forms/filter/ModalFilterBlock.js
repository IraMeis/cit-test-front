import modals from "../../../util/modalFilterPair.json";
import ModalFilter from "./ModalFilter";
import ModalFilterResult from "./FilterResult";
import React, {useState} from "react";

const ModalFilterBlock = ({modalFilterState}) => {

    const [responseData, setResponseData] = useState([]);

  return(
      <div>
          {modalFilterState === modals.filter && <ModalFilter setResponseData={setResponseData}
                                                              show={modalFilterState === modals.filter}/>}

          {modalFilterState === modals.resultFilter && <ModalFilterResult responseData={responseData}
                                                              show={modalFilterState === modals.resultFilter} />}
      </div>
  );
}

export default ModalFilterBlock;
