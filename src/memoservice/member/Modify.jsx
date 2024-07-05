import React, { useEffect, useState } from "react";
import { getMyMemObj, getMemoServiceMemberDB, setMemoServiceMemberDB } from '../const/const.js';
import { getLoginedSessionID } from '../Session.js';
import { getCurrentDateTime } from '../util.js';

const Modify = (props) => {

        // Hook

        const [uId, setUId] = useState('');
        const [uPw, setUPw] = useState('');
        const [uMail, setUMail] = useState('');
        const [uPhone, setUPhone] = useState('');

        useEffect(() => {
            console.log('useEfect()');

            let memObj = getMyMemObj(getLoginedSessionID());

            setUId(memObj,uId);
            setUPw(memObj,uPw)
            setUMail(memObj,uMail);
            setUPhone(memObj,uPhone);


        }, []);
    
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
        
        const modifyBtnHandler = () => {
            console.log('modifyBtnHandler()');

            let memDBInStorage = getMemoServiceMemberDB();
            let memDBJsObj = JSON.parse(memDBInStorage);
            memDBJsObj[uId] = {
                'uId'       : uId,
                'uPw'       : uPw,
                'uMail'     : uMail,
                'uPhone'    : uPhone,
                'uRegDate'  : memDBJsObj[uId].uRegDate,
                'uModDate'  : getCurrentDateTime(),
            }

            setMemoServiceMemberDB(memDBJsObj);

            alert('MEMBER MODIFY SUCCESS');
            
            props.homeViewer(true);
            props.signUpViewer(false);
            props.signInViewer(false);
            props.MemoViewer(false);
            props.MemoListViewer(false);
            props.ModifyViewer(false);
        }
    return(
        <div id="modify">
            <input type="text" className="txt_field" name="u_id" value={uId} onChange={uIdChangeHandler} readOnly placeholder="INPUT USER ID"/>
            <br />
            <input type="password" className="txt_field" name="u_pw" value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input type="email" className="txt_field" name="u_mail" value={uMail}  onChange={uMailChangeHandler} placeholder="INPUT USER MAIL"/>
            <br />
            <input type="text" className="txt_field" name="u_phone" value={uPhone}  onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE"/>
            <br />
            <input type="button" className="basic_btn" value="SIGN UP" onClick={modifyBtnHandler}/>
        </div>
    );
}

export default Modify;