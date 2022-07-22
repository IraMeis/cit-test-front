import {Link} from "react-router-dom";
import Separator from "../const/Separator";

const About = () => {
  return (
    <div className="container">
      <header className="jumbotron text-center">
          <h1>Test tasks</h1>
          <Separator.Separator1/>
          <h5>Сборка версии 1.0.0</h5>
          <h5>Реализованы <Link to={`/tasks`}>две задачи</Link> </h5>
      </header>
    </div>
  );
};

export default About;
