import React, { useState } from "react";
import { setLoginedSessionID, getLoginedSessionID } from './Session.js';


const SignIn = (props) => {

    const [uId, setUid] = useState('');
    const [uPw, setUpw] = useState('');


    const uIdchangeHandler = (e) => {
        console.log('uIdchangeHandler()');

        setUid(e.target.value);
    }
    const uPwchangeHandler = (e) => {
        console.log('uPwchangeHandler()');

        setUpw(e.target.value);
    }

    const signInBtnClickHandler = () => {
        console.log('signInBtnClickHandler()');

        let memDBInstorage = localStorage.getItem('memberDB');      // String

        let memDBObj = JSON.parse(memDBInstorage)                   // JS Obj ( ALL MEMBER )

        let memObj = memDBObj[uId];                                 // JS Obj (MY MEMBER)

        if(memObj !== undefined && memObj.uPw === uPw) { 
            // 회원 정보 객체(Obj)가 있는경우
                alert('SIGN IN SUCCESS');

                setLoginedSessionID(uId);   

                props.homeViewer(true);
                props.signUpViewer(false);
                props.signInViewer(false);
                props.reservationViewer(false);
                props.reservationListViewer(false);

                props.changeMenuBar(true);

        } else {
            // 회원 정보가 객체(Obj)가 없는경우
            alert('SIGN IN FAIL');

            setLoginedSessionID();

            props.homeViewer(false);
            props.signUpViewer(false);
            props.signInViewer(true);
            props.reservationViewer(false);
            props.reservationListViewer(false);

            setUid('')
            setUpw('')
        }
    }
    return(
        <div>
            <input type="text" name="u_id" value={uId} onChange={uIdchangeHandler} placeholder="input user ID" />
            <br />
            <input type="password" name="u_pw" value={uPw} onChange={uPwchangeHandler} placeholder="input user PW" />
            <br />
            <input type="button" value="SIGN IN" onClick={signInBtnClickHandler} />
        </div>
    );
}

export default SignIn;