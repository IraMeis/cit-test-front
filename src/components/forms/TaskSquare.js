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
        <div>
            <h6><strong>Суть задачи:</strong></h6>
            <h6>Для входной матрицы находится стоимость преобразования в нормальный
                <a href="https://ru.wikipedia.org/wiki/
                %D0%9C%D0%B0%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_
                %D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82"> магический (полумагический) квадрат </a>
                третьего порядка и сам квадрат.</h6>
            <Separator.Separator1/>
        <div className="row">
            <div className="col">
                <p> <strong>Входная матрица:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              onChange={onChangeInputMatr}
                              value={taskParams.inputMatrix}
                              placeholder="Вводите значения через пробел"
                              rows="6">
                    </textarea>
                </div>
            </div>

            <Separator.Separator1/>

            <div className="col">
                <p> <strong>Результат:</strong> </p>
                <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              value={taskParams.outputMatrix}
                              rows="6">
                    </textarea>
                </div>
            </div>

        </div>
        </div>
    );
}
export default TaskSquare;
