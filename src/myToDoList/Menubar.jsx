import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { setLoginedSessionID } from './js/session'
const Menubar = (props) => {

    //hook
    const [isSignIned,setIsSignIned] = useState(false);


    useEffect(()=> {
        console.log('[Menubar] useEffect()');

        setIsSignIned(props.isSignIned);

    });

    //Handler
    const signOutClickHandler = () => {
        console.log('[Menubar] signOutClickHandler()');

        alert('SIGN OUT SUCCESS');
        setLoginedSessionID();
        props.setIsSignIned(false);

    }

    return(
        <>
            <div className="menubar">
                <Link to="/">Home</Link>
                {
                    isSignIned
                    ?
                    <>
                        <Link to="/modify">Modify</Link>
                        <Link to="/" onClick={signOutClickHandler}>SignOut</Link>
                    </>
                    :
                    <>    
                        <Link to="/signup">SignUp</Link>
                        <Link to="/signin">SignIn</Link>
                    </>

                }
                <Link to="/todowrite">TodoWrite</Link>
                <Link to="/todolist">TodoList</Link>
                <Link to="/adminsignin">Admin Mode</Link>
            </div>
            <Outlet />
        </>
    );
}


export default Menubar;