import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from '../js/utils'
import { setLoginedSessionID, getLoginedSessionID} from '../js/session'

const SignIn = ( props ) => {

    // HOOK 
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');

    const navgete = useNavigate();

    const uIdChangeHandler = (e) => {
        console.log('[SignIn] uIdChangeHandler()');

        setUId(e.target.value);
        
    }

    const uPwChangeHandler = (e) => {
        console.log('[SignIn] uPwChangeHandler()');

        setUPw(e.target.value);

    }
    const signInBtnClickHandler = () => {
        console.log('[SignIn] signInBtnClickHandler()');

        let myInfo = getMyInfo(uId);

        if (myInfo !== undefined && myInfo.uPw === uPw) {
            alert('SIGN IN SUCCESS');
            
            setLoginedSessionID(uId);
            props.setIsSignIned(true);
            navgete('/');

        } else {
            alert('SIGN IN FAIL');
            
            setLoginedSessionID('');
            props.setIsSignIned(false);

            setUId('');
            setUPw('');


        }
    }

    return(
        <div className="sign-in">
            <h3>SIGN IN</h3>
            <input className="txt-basic" type="text" value={uId} onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input className="txt-basic" type="password" value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input className="btn-basic" type="button" onClick={signInBtnClickHandler} value="SIGN IN"/>
        </div>
    );
}


export default SignIn;