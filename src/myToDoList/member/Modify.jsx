import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDateTime, 
         getMyInfo, setMyInfo, 
         getAllMemberInfo, getAllTodoInfo,
         setTodoSvcMemberDB, setTodoSvcTodoDB,
         } from '../js/utils'
import { getLoginedSessionID, setLoginedSessionID } from '../js/session'

const Modify = ( props ) => {

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

            let myInfo = getMyInfo(getLoginedSessionID());      // 변경전(현재 나의) 나의 정보
            myInfo.uPw = uPw;
            myInfo.uMail = uMail;
            myInfo.uPhone = uPhone;
            myInfo.uModDate = getDateTime();                    // 나의 정보 업데이트

            setMyInfo(getLoginedSessionID(), myInfo);           // DB 업데이트

            alert('MODIFY SUCESS');

            navigate('/');
        }
    
        const DeleteBtnClickHandler = () => {
            console.log('[Modify] DeleteBtnClickHandler');

            if (window.confirm('Really')) {
            //DELETE MEMBER
            let allMemberInfo = getAllMemberInfo();
            delete allMemberInfo[getLoginedSessionID()];
            setTodoSvcMemberDB(allMemberInfo);
            
            //DELETE TODO
            let allTodoInfo = getAllTodoInfo();
            delete allTodoInfo[uId];
            setTodoSvcTodoDB(allTodoInfo);

            alert('Delete Success');

            setLoginedSessionID();

            props.setIsSignIned(false);

            navigate('/')               // 화면전환       
            } else {
                alert('DELETE CANCLED');
            }
            
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
            <input className="btn-basic" type="button" onClick={DeleteBtnClickHandler} value="Delete"/>
        </div>
    );
}


export default Modify;