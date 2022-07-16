import {Link} from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
            testTaskProject
        </Link>
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/tasks"} className="nav-link">
                    T a s k s
                </Link>
            </li>
        </div>
    </nav>);
}
export default NavBar;
