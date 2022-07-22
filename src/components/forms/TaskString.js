import Separator from "../const/Separator";
import {useContext} from "react";
import TaskContext from "../context/TaskContext";

const TaskString = () => {

    const taskParams = useContext(TaskContext);

    const onChangeArr1 = (e) => {
        const h = e.target.value;
        taskParams.setArr1(h);
    }

    const onChangeArr2 = (e) => {
        const h = e.target.value;
        taskParams.setArr2(h);
    }

    return (
        <div>
            <h6><strong>Суть задачи:</strong></h6>
            <h6>Для каждого элемента массива строк А1 определяется, является ли этот элемент
                подстрокой любого из элементов массива строк А2. В результирующий массив попадают
                сответствующие условию уникальные подстроки из А1 в лексикографическом порядке.</h6>
            <Separator.Separator1/>
            <p> <strong>Массив подстрок А1:</strong> </p>
            <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              onChange={onChangeArr1}
                              value={taskParams.arr1}
                              placeholder="Вводите значения через пробел"
                              rows="3">
                    </textarea>
            </div>

            <Separator.Separator1/>

            <p> <strong>Массив строк А2:</strong> </p>
            <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              onChange={onChangeArr2}
                              value={taskParams.arr2}
                              placeholder="Вводите значения через пробел"
                              rows="3">
                    </textarea>
            </div>

            <Separator.Separator1/>

            <p> <strong>Результат R:</strong> </p>
            <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              value={taskParams.arrRes}
                              rows="3">
                    </textarea>
            </div>

        </div>
    );
}
export default TaskString;

