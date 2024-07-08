import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return(
        <div>
            <Link to="/">HOME</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/signup/hello/hi">SignUp</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/signin?param2=10&param1=20">SignIn</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/modify">Modify</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/todowrite">TodoWrite</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/todolist">TodoList</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
        </div>

    );
}

export default MenuBar;