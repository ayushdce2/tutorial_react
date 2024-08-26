import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to={"/Restaurants"}>Restaurants</Link></li>
                <li><Link to={"/Restaurants_unit"}>Restaurants_unit</Link></li>
            </ul>
            <hr/>
        </>
    )
}

export default Header;