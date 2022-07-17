import React, {useState} from "react";
import Separator from "../const/Separator";
import TaskButtons from "./TaskButtons";

const TaskString = () => {

    const [arr1, setArr1] = useState("");
    const onChangeArr1 = (e) => {
        const h = e.target.value;
        setArr1(h);
    }

    const [arr2, setArr2] = useState("");
    const onChangeArr2 = (e) => {
        const h = e.target.value;
        setArr2(h);
    }

    const [isErr, setIsErr] = useState(false);

    const handleDownloadFile = () => {};

    const handleUploadFile = () => {};

    const handleDownloadDB = () => {};

    const handleUploadDB = () => {};

    return (
        <div className="row g-5">
            <div className="jumbotron bg-light col-md-9">

                <p> <strong>Массив подстрок А1:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              placeholder="Вводите значения через пробел"
                              rows="3">
                    </textarea>
                </div>

                <Separator.Separator1/>

                <p> <strong>Массив строк А2:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              placeholder="Вводите значения через пробел"
                              rows="3">
                    </textarea>
                </div>

                <Separator.Separator1/>

                <p> <strong>Результат R:</strong> </p>
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
export default TaskString;
