import React, { useState } from "react";
import { getMyMemObj } from '../const/const.js';
import { setLoginedSessionID } from '../Session.js';


    const SignIn = (props) => {

    // Hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    
    // Handler


    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler()');

        setUId(e.target.value);
    }
    
    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler()');

        setUPw(e.target.value);

    }

    const SignInBtnHandler = () => {
        console.log('SignInBtnHandler');

        let memObj = getMyMemObj(uId);
        if (memObj !== undefined && memObj.uPw === uPw) {
            // 아이디 존재 O 패스워드 일치 확인 후 로그인 성공
            alert('SIGN IN SUCCESS')
            // 화면 변경
            props.homeViewer(true);
            props.signUpViewer(false);
            props.signInViewer(false);
            props.MemoViewer(false);    
            props.MemoListViewer(false);

            props.changeMenubar(true);
            //로그인 세션
            setLoginedSessionID(uId);
                
        } else {
            alert('SIGN IN FAIL');
            // 아이디 존재 X

            props.homeViewer(false);
            props.signUpViewer(false);
            props.signInViewer(true);
            props.MemoViewer(false);    
            props.MemoListViewer(false);

            // 깔끔하게 비워주는 과정
            setUId('');
            setUPw('');
            setLoginedSessionID();
        }


    }


    return(
        <div id="sign_in">
            <input type="text" className="txt_field" name="u_id" value={uId} onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input type="password" className="txt_field" name="u_pw"value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input type="button" className="basic_btn" value="SIGN IN" onClick={SignInBtnHandler}/>
        </div>
    );
}

export default SignIn;