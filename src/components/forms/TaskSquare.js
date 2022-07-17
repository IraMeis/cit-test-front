import React, {useState} from "react";
import Separator from "../const/Separator";
import TaskButtons from "./TaskButtons";

const TaskSquare = () => {

    const [inputMatr, setInputMatr] = useState("");
    const onChangeInputMatr = (e) => {
        const h = e.target.value;
        setInputMatr(h);
    }

    const [isErr, setIsErr] = useState(false);

    const handleDownloadFile = () => {};

    const handleUploadFile = () => {};

    const handleDownloadDB = () => {};

    const handleUploadDB = () => {};

    return (
        <div className="row g-5">
            <div className="jumbotron bg-light col-md-9">

                <p> <strong>Входная матрица:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              placeholder="Вводите значения через пробел"
                              rows="3">
                    </textarea>
                </div>

                <Separator.Separator1/>

                <p> <strong>Результат:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              rows="3">
                    </textarea>
                </div>

            </div>

            <div className="jumbotron col-md-3 text-center">
                <TaskButtons/>
            </div>
        </div>
    );
}
export default TaskSquare;