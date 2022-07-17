const TaskButtons = () => {
  return(
      <div>
          <button type="button" className="btn btn-outline-dark btn-block">
              Посчитать</button>
          <hr/>
          <button type="button" className="btn btn-outline-info btn-block">
              Сохранить</button>
          <button type="button" className="btn btn-outline-info btn-block">
              Загрузить</button>
          <button type="button" className="btn btn-outline-info btn-block">
              Экспортировать</button>
          <button type="button" className="btn btn-outline-info btn-block">
              Импортировать</button>
      </div>
  );
}

export default TaskButtons;
