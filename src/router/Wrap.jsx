import React from "react";
import MenuBar from "./MenuBar";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Modify from "./Modify";
import ToDoList from "./ToDoList";
import ToDoWrite from "./ToDoWrite";
import NG from "./NG";

const Wrap = () => {
    return(
        <BrowserRouter>
            <MenuBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signup/:param1/:param2" element={<SignUp />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/modify" element={<Modify />}></Route>
                <Route path="/todowrite" element={<ToDoWrite />}></Route>
                <Route path="/todolist" element={<ToDoList />}></Route>
                <Route path="/*" element={<NG />}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default Wrap;