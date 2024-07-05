import React, { useState } from "react";
import Home from './Home';
import SignUp from "./member/SignUp";
import SignIn from "./member/SignIn";
import Modify from "./member/Modify";
import Memo from './memo/Memo';
import MemoList from './memo/MemoList';



const Menubar = () => {

    // hook
    const [isHome, setIsHome] = useState(true);
    const [isSignUp, setSignUp] = useState(false);
    const [isSignIn, setSignIn] = useState(false);
    const [isModify, setIsModify] = useState(false);
    const [isMemo, setIsMemo] = useState(false);
    const [isMemoList, setIsMemoList] = useState(false);

    const [isLogined, setIsLogined] = useState(false);

    // Handler

    const homeClickHandler = () => {
        console.log('homeClickHandler()');

        setIsHome(true);
        setSignUp(false);
        setSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const signUpClickHandler = () => {
        console.log('signUpClickHandler()');

        setIsHome(false);
        setSignUp(true);
        setSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const signInClickHandler = () => {
        console.log('signInClickHandler()');

        setIsHome(false);
        setSignUp(false);
        setSignIn(true);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const signOutClickHandler = () => {
        console.log('signOutClickHandler()');

        setIsHome(true);
        setSignUp(false);
        setSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }
    const modifyClickHandler = () => {
        console.log('modifyClickHandler()');

        setIsHome(false);
        setSignUp(false);
        setSignIn(false);
        setIsModify(true);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const memoClickHandler = () => {
        console.log('memoClickHandler()');

        setIsHome(false);
        setSignUp(false);
        setSignIn(false);
        setIsModify(false);
        setIsMemo(true);
        setIsMemoList(false);

    }

    const memolistClickHandler = () => {
        console.log('memolistClickHandler()');

        setIsHome(false);
        setSignUp(false);
        setSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(true);

    }

    return(
        <div id="menubar">
            <div className="menus">
                <a href="#none" onClick={homeClickHandler}>HOME</a>
                {
                    isLogined
                    ?
                    <>
                    <a href="#none" onClick={signOutClickHandler}>SIGN-OUT</a>
                    <a href="#none" onClick={modifyClickHandler}>MODIFY</a>
                    </>
                    :
                    <>
                    <a href="#none" onClick={signUpClickHandler}>SIGN-UP</a>
                    <a href="#none" onClick={signInClickHandler}>SIGN-IN</a>
                    </>
                }

 
                <a href="#none" onClick={memoClickHandler}>MEMO</a>
                <a href="#none" onClick={memolistClickHandler}>MEMO-LIST</a>
            </div>
            {
                isHome 
                ?
                    <Home />
                :
                null
            }
            {
                isSignUp
                ?
                    <SignUp 
                        homeViewer={setIsHome}
                        signUpViewer={setSignUp}
                        signInViewer={setSignIn}
                        MemoViewer={setIsMemo}
                        MemoListViewer={setIsMemoList}
                    />
                :
                null
            }
            {
                isSignIn
                ?
                    <SignIn 
                    homeViewer={setIsHome}
                    signUpViewer={setSignUp}
                    signInViewer={setSignIn}
                    MemoViewer={setIsMemo}
                    MemoListViewer={setIsMemoList}
                    changeMenubar={setIsLogined}
                    />
                :
                null
            }
            {
                isModify
                ?
                    <Modify 
                    homeViewer={setIsHome}
                    signUpViewer={setSignUp}
                    signInViewer={setSignIn}
                    ModifyViewer={setIsModify}
                    MemoViewer={setIsMemo}
                    MemoListViewer={setIsMemoList} 
                    />
                :
                null
            }
            {
                isMemo
                ?
                    <Memo />
                :
                null
            }
            {
                isMemoList
                ?
                    <MemoList />
                :
                null
            }
        </div>
    );
}

export default Menubar;