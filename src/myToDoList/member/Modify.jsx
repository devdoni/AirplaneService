import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo, } from '../js/utils'
import { getLoginedSessionID} from '../js/session'

const Modify = () => {

        //Hook 
        const [uId, setUId] = useState('');
        const [uPw, setUPw] = useState('');
        const [uMail, setUMail] = useState('');
        const [uPhone, setUPhone] = useState('');

        const navigate = useNavigate();
    
        useEffect(() => {
            console.log('[Modify] useEffect');

            let myInfo = getMyInfo(getLoginedSessionID());

            if (myInfo === undefined) {
                alert('Please Sign In');
                navigate('/signin');
                return;
            }

            setUId(myInfo.uId);
            setUPw(myInfo.uPw);
            setUMail(myInfo.uMail);
            setUPhone(myInfo.uPhone);

        },[]);


        const uPwChangeHandler = (e) => {
            console.log('[Modify] uPwChangeHandler()');
    
            setUPw(e.target.value);
    
        }
    
        const uMailChangeHandler = (e) => {
            console.log('[Modify] uMailChangeHandler()');
    
            setUMail(e.target.value);
    
        }
    
        const uPhoneChangeHandler = (e) => {
            console.log('[Modify] uPhoneChangeHandler()');
    
            setUPhone(e.target.value);
    
        }

        const ModifyBtnClickHandler = () => {
            console.log('[Modify] ModifyBtnClickHandler()');


        }
    

    return(
        <div className="modify">
            <h3>MODIFY</h3>
            <input className="txt-basic" type="text" value={uId} readOnly/>
            <br />
            <input className="txt-basic" type="password" value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input className="txt-basic" type="email" value={uMail} onChange={uMailChangeHandler} placeholder="INPUT USER MAIL"/>
            <br />
            <input className="txt-basic" type="text" value={uPhone} onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE"/>
            <br />
            <input className="btn-basic" type="button" onClick={ModifyBtnClickHandler} value="Modify"/>
        </div>
    );
}


export default Modify;