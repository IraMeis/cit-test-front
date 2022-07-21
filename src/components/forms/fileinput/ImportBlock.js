const ImportBlock = ({handleShowModalF, handleShowModalInputFile}) => {
  return(
      <div>
          <button type="button"
                  onClick={handleShowModalF}
                  className="btn btn-outline-info btn-block">
              Загрузить</button>
          <button type="button"
                  onClick={handleShowModalInputFile}
                  className="btn btn-outline-info btn-block">
              Импортировать</button>
      </div>
  )
}

export default ImportBlock;