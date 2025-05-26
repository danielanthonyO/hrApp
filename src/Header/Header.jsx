import { Link } from "react-router-dom";
import "./Header.css"

const Header = ({ name }) => {
return (
<header>
    <h2>{name}'s HR App</h2>
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Employee</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    </nav>
</header>
);
};

export default Header;


