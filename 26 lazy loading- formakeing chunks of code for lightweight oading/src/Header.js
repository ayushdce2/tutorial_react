import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                
                <li><Link to="/Lazy_loading_component">Lazy_loading_component</Link></li>
            </ul>
            <hr/>
        </>
    )
}

export default Header;