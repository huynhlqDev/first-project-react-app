import { Link } from "react-router-dom";

const Header = () => {
    return (
       <div className="header">HEADER
       <br></br>
       <Link to="/home">Home</Link>
       <br></br>
       <Link to="/login">login</Link>
       <br></br>
       <Link to="/dashboard">dashboard</Link>
       </div> 
    )
}

export default Header;