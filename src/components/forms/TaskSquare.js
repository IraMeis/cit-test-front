import Separator from "../const/Separator";
import {useContext} from "react";
import TaskContext from "../context/TaskContext";

const TaskSquare = () => {

    const taskParams = useContext(TaskContext);

    const onChangeInputMatr = (e) => {
        const h = e.target.value;
        taskParams.setInputMatrix(h);
    }

    return (
        <div className="row">
            <div className="col">
                <p> <strong>Входная матрица:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              onChange={onChangeInputMatr}
                              value={taskParams.inputMatrix}
                              placeholder="Вводите значения через пробел"
                              rows="3">
                    </textarea>
                </div>
            </div>

            <Separator.Separator1/>

            <div className="col">
                <p> <strong>Результат:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              rows="3">
                    </textarea>
                </div>
            </div>

        </div>
    );
}
export default TaskSquare;
