import React, { useEffect, useState } from "react";
import { getLoginedSessionID } from "./Session";
import { getCurrentDateTime } from "./utils.js";

const ReservationModify = (props) => {

    // hook
        const [rName, setRName] = useState('');    
        const [rMail, setRMail] = useState('');    
        const [rPhone, setRPhone] = useState('');    
        const [rSP, setRSP] = useState('');    
        const [rSPT, setRSPT] = useState('');    
        const [rEP, setREP] = useState('');    
        const [rEPT, setREPT] = useState(''); 
        const [rAdultCnt, setRAdultCnt] = useState(0); 
        const [rChildCnt, setRChildCnt] = useState(0); 
        const [rInfantCnt, setRInfantCnt] = useState(0); 

        useEffect(() => {
            console.log('[RservationModify] useEfect()');

          //  console.log(props.keyToBeModified)
          let reservaionDBInStorage = localStorage.getItem('reservationDB');
          let reservationDBObj = JSON.parse(reservaionDBInStorage);
          let myReservations = reservationDBObj[getLoginedSessionID()];
          let toBeMofiyedReservationObj = myReservations[props.keyToBeModified];

          setRName(toBeMofiyedReservationObj.rName);
          setRMail(toBeMofiyedReservationObj.rMail);    
          setRPhone(toBeMofiyedReservationObj.rPhone);
          setRSP(toBeMofiyedReservationObj.rSP);
          setRSPT(toBeMofiyedReservationObj.rSPT);
          setREP(toBeMofiyedReservationObj.rEP);
          setREPT(toBeMofiyedReservationObj.rEPT);
          setRAdultCnt(toBeMofiyedReservationObj.rAdultCnt);
          setRChildCnt(toBeMofiyedReservationObj.rChildCnt);
          setRInfantCnt(toBeMofiyedReservationObj.rInfantCnt);
         //   console.log('toBeMofiyedReservationObj: ', toBeMofiyedReservationObj)


        }, []);
       // handler

        const rNameChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rNameChangeHandler()');
            setRName(e.target.value);
    
        }
        const rMailChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rMailChangeHandler()');
            setRMail(e.target.value);
    
        }
        const rPhoneChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rPhoneChangeHandler()');
            setRPhone(e.target.value);
    
        }
        const rSPChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rSPChangeHandler()');
            setRSP(e.target.value);
    
        }
        const rSPTChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rSPTChangeHandler()');
            setRSPT(e.target.value);
    
        }
        const rEPChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rEPChangeHandler()');
            setREP(e.target.value);
    
        }
        const rEPTChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rEPTChangeHandler()');
            setREPT(e.target.value);
    
        }
        const rAdultCntChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rAdultCntChangeHandler()');
            setRAdultCnt(e.target.value);
    
        }
        const rChildCntChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rChildCntChangeHandler()');
            setRAdultCnt(e.target.value);
    
        }
        const rInfantCntChangeHandler = (e) => {
            //if (!getProdFlag()) 
            console.log('rInfantCntChangeHandler()');
            setRInfantCnt(e.target.value);
    
        }
        const reserModBtnClickHanlder = () => {
            //if (!getProdFlag()) 
            console.log('reserModBtnClickHanlder()');
    
            let reservationDBInStorage = localStorage.getItem('reservationDB');   // string
            let reservationObj = JSON.parse(reservationDBInStorage);              // reervation Obj(All Reservation)
            let myReservationObjs = reservationObj[getLoginedSessionID()];        // My 
            // if(!getProdFlag()) 
                console.log('myReservationObjs', myReservationObjs);     
            
            myReservationObjs[props.keyToBeModified] = {
                'rName'     : rName,
                'rMail'     : rMail,
                'rPhone'    : rPhone,
                'rSP'       : rSP,
                'rSPT'      : rSPT,
                'rEP'       : rEP,
                'rEPT'      : rEPT,
                'rAdultCnt' : rAdultCnt,
                'rChildCnt' : rChildCnt,
                'rInfantCnt': rInfantCnt,
            }
            reservationObj[getLoginedSessionID()] = myReservationObjs;
            reservationDBInStorage = JSON.stringify(reservationObj); // string
            localStorage.setItem('reservationDB', reservationDBInStorage);
    
            alert('RESERVATION MODIFY SUCCESS');
    
            props.setShowReservationModifyModal(false);
            
        }

    return(
        <>
            <input type="text" name="rName" value={rName} onChange={rNameChangeHandler} placeholder="input name" />
            <br />
            <input type="text" name="rMail" value={rMail} onChange={rMailChangeHandler} placeholder="input mail" />
            <br />
            <input type="text" name="rPhone" value={rPhone} onChange={rPhoneChangeHandler} placeholder="input phone" />
            <br />
            <input type="text" name="rStartPoint" value={rSP} onChange={rSPChangeHandler} placeholder="input start point" />
            <br />
            <input type="text" name="rStartPointTime" value={rSPT} onChange={rSPTChangeHandler} placeholder="input start point time" />
            <br />
            <input type="text" name="rEndPoint" value={rEP} onChange={rEPChangeHandler} placeholder="input start end point" />
            <br />
            <input type="text" name="rEndPointTime" value={rEPT} onChange={rEPTChangeHandler} placeholder="input start end point time" />
            <br />
            <select name="rAdult" value={rAdultCnt} onChange={rAdultCntChangeHandler}> 
                <option>--- 성인 수(만 18세 이상) ---</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <br />
            <select name="rChild" value={rChildCnt} onChange={rChildCntChangeHandler}> 
                <option>--- 어린이 수(만 7세 이상 ~ 만 18세 미만) ---</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <br />
            <select name="rInfantCnt" value={rInfantCnt} onChange={rInfantCntChangeHandler} > 
                <option>--- 유아 수(만 7세 미만) ---</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <br />
            <input type="button" value="MODIFY RESERVATION" onClick={reserModBtnClickHanlder}/>
        </>
    );
}

export default ReservationModify;