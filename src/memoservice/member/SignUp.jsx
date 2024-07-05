import React, { useState } from "react";
import { getMemoServiceMemberDB, 
         setMemoServiceMemberDB, 
         getMemoServiceMemoDB,
         setMemoServiceMemoDB,
         } from '../const/const.js';
import { getCurrentDateTime } from '../util.js';
import { jsx } from "react/jsx-runtime";
const SignUp = (props) => {

    // Hook

    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    // Handler

    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler()');

        setUId(e.target.value);
    }
    
    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler()');

        setUPw(e.target.value);

    }

    const uMailChangeHandler = (e) => {
        console.log('uMailChangeHandler()');

        setUMail(e.target.value);
    }

    const uPhoneChangeHandler = (e) => {
        console.log('uPhoneChangeHandler()');

        setUPhone(e.target.value);

    }

    const SignUpBtnHandler = () => {
        console.log('SignUpBtnHandler()');

        let memDBInStorage = getMemoServiceMemberDB();
        if(memDBInStorage === null) {
            let newMemObj = {
                [uId]: {
                    'uId'       : uId,
                    'uPw'       : uPw,
                    'uMail'     : uMail,
                    'uPhone'    : uPhone,
                    'uRegDate'  : getCurrentDateTime(),
                    'uModDate'  : getCurrentDateTime(),
                }
            }

            //let nemMemStr = JSON.stringify(newMemObj);
            //localStorage.setItem(MEMBER_DB_IN_LOCAL_STORAGE, nemMemStr);
            setMemoServiceMemberDB(newMemObj);



        } else {

            let memDBJsObj = JSON.parse(memDBInStorage);
            memDBJsObj[uId]= {
                    'uId'       : uId,
                    'uPw'       : uPw,
                    'uMail'     : uMail,
                    'uPhone'    : uPhone,
                    'uRegDate'  : getCurrentDateTime(),
                    'uModDate'  : getCurrentDateTime(),
            }

            // let memsStr = JSON.stringify(memDBJsObj);
            // localStorage.setItem(MEMBER_DB_IN_LOCAL_STORAGE, memsStr);
            setMemoServiceMemberDB(memDBJsObj);
        }

        let memoDBInStorage = getMemoServiceMemoDB();
        if(memoDBInStorage === null) {
            let newMemoObj = {
                    [uId]: {}
                
            } 
                setMemoServiceMemoDB(newMemoObj);
        } else {
            let memoDBJsObj = JSON.parse(memoDBInStorage);
                memoDBJsObj[uId] = {};

                setMemoServiceMemoDB(memoDBJsObj);

        }
        alert('SIGN UP SUCESS');

        props.homeViewer(false);
        props.signUpViewer(false);
        props.signInViewer(true);
        props.MemoViewer(false);
        props.MemoListViewer(false);
    }

    return(
        <div id="sign_up">
            <input type="text" className="txt_field" name="u_id" onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input type="password" className="txt_field" name="u_pw"onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input type="email" className="txt_field" name="u_mail" onChange={uMailChangeHandler} placeholder="INPUT USER MAIL"/>
            <br />
            <input type="text" className="txt_field" name="u_phone" onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE"/>
            <br />
            <input type="button" className="basic_btn" value="SIGN UP" onClick={SignUpBtnHandler}/>
        </div>
    );
}

export default SignUp;