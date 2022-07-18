import Separator from "../const/Separator";

const TaskString = (props) => {

    const onChangeArr1 = (e) => {
        const h = e.target.value;
        props.setArr1(h);
    }

    const onChangeArr2 = (e) => {
        const h = e.target.value;
        props.setArr2(h);
    }

    return (
        <div>
            <p> <strong>Массив подстрок А1:</strong> </p>
            <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              onChange={onChangeArr1}
                              placeholder="Вводите значения через пробел"
                              rows="3">
                        {props.arr1}
                    </textarea>
            </div>

            <Separator.Separator1/>

            <p> <strong>Массив строк А2:</strong> </p>
            <div className="input-large">
                    <textarea className="md-textarea md-textarea-auto form-control"
                              onChange={onChangeArr2}
                              placeholder="Вводите значения через пробел"
                              rows="3">
                        {props.arr2}
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
    );
}
export default TaskString;

