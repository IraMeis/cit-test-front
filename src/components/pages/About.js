import {Link} from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <header className="jumbotron text-center">
        <h3>Проект в процессе разработки</h3>
          <h5>Когда-нибудь здесь появится описание, а пока есть ссылка на
              <Link to={`/tasks`}> задачки</Link> </h5>
      </header>
    </div>
  );
};

export default About;
