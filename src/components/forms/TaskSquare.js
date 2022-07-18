import Separator from "../const/Separator";

const TaskSquare = (props) => {

    const onChangeInputMatr = (e) => {
        const h = e.target.value;
        props.setMatrix(h);
    }

    return (
        <div>
            <p> <strong>Входная матрица:</strong> </p>
            <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              onChange={onChangeInputMatr}
                              placeholder="Вводите значения через пробел"
                              rows="3">
                        {props.matrix}
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
    );
}
export default TaskSquare;
