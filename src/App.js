import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/common/NavBar";
import Routing from "./components/common/Routing";

const App = () => {

  return (
    <div>
        <NavBar/>
        <Routing/>
    </div>
  );
};

export default App;
