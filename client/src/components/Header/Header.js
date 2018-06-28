import  React from 'react';
import {Link } from 'react-router-dom'
// import {Col} from '../Grid'
var style={
    color:"white"
    
}
const Header =() => {
        return (
            <div>
            <nav className="navbar navbar-expand-lg bg-primary " style={style}>

                <Link style={style} to="/home" activeClassName="active">home</Link>
                {"||"}
                <Link style={style} to="saved" activeClassName="active">saved Article</Link>
              
            </nav>
            </div>
        );
}
export default Header;
