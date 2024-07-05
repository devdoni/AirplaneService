import React, { useEffect, useState } from "react";
import { getLoginedSessionID } from "./Session";
import ReservationModify from "./RservationModify";

const ReservationList = () => {

    // hook
    const [myReservationArr, setMyReservationArr] = useState([]);
    const [keyToBeModified, setKeyToBeModified] = useState('');
    const [showReservationModifyModal, setShowReservationModifyModal] = useState(false);
    const [tempFlag, setTempFlag] = useState(false);

    useEffect(() => {
        if (!getProdFlag()) console.log('useEffect()');
        let reservaionDBInStorage = localStorage.getItem('reservationDB');
        let reservationDBObj = JSON.parse(reservaionDBInStorage);
        let myReservations = reservationDBObj[getLoginedSessionID()];

        let myReservatioonKeys = Object.keys(myReservations);

        let tempArr = [];
        for(let i = 0; i < myReservatioonKeys.length; i++ ) {
            let myReservation = myReservations[myReservatioonKeys[i]];
            myReservation['key'] = myReservatioonKeys[i];
            tempArr.push(myReservation);
        }
        setMyReservationArr(tempArr);

    }, [tempFlag ,showReservationModifyModal]);
    // handler
    const modifyBtnClickHandler = (e, key) => {
        if (!getProdFlag()) console.log('modifyBtnClickHandler()');

        setKeyToBeModified(key);
        setShowReservationModifyModal(true);


    }

    const deleteBtnClickHandler = (e, key) => {
        if (!getProdFlag()) console.log('deleteBtnClickHandler()');

        let result = window.confirm('Really?');     // true or false
        if (result) {
            let reservaionDBInStorage = localStorage.getItem('reservationDB');
            let reservationDBObj = JSON.parse(reservaionDBInStorage);
            let myReservations = reservationDBObj[getLoginedSessionID()];

            delete myReservations[key];
            reservationDBObj[getLoginedSessionID()] = myReservations;
            reservaionDBInStorage = JSON.stringify(reservationDBObj);
            localStorage.setItem('reservationDB', reservaionDBInStorage);

            alert('Deleted');

            setTempFlag(v => !v);

        } else {
            alert('Delete cancled');
        }
        
    }


    // css
    const style_div = {
        width: "1700px",
        margin: "0 auto",
    }
    const style_li = {
        padding: "4px",
        margin: "5px",
        borderbottom: "1px solid #dadada",
        liststyle: "none",
    }
    const style_modal_Bg = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0', top: '0',
        backgroundColor: 'rgba(0, 0, 0, .5)',
    }

    return(
        <div style={style_div}>
            <ul>
                {
                    myReservationArr.map((myReservation, idx) => 
                        <li key={idx} style={style_li}>
                            예약번호: {myReservation.key} |
                            예약자: {myReservation.rName} |
                            메일: {myReservation.rMail} |
                            연락처: {myReservation.rPhone} |
                            <br />
                            출발지: {myReservation.rSP} |
                            출발시간: {myReservation.rSPT} |
                            도착지: {myReservation.rEP} |
                            도착시간: {myReservation.rEPT} |
                            성인: {myReservation.rAdultCnt} |
                            어린이: {myReservation.rChildCnt} |
                            유아: {myReservation.rInfantCnt} 
                            &nbsp;&nbsp;
                            <button onClick={(e) => modifyBtnClickHandler(e, myReservation.key)}>MOD</button>
                            <button onClick={(e) => deleteBtnClickHandler(e, myReservation.key)}>DEL </button>

                        </li>
                    )
                }

            </ul>
            {
                showReservationModifyModal
                ?
                <div className="modalBg" style={style_modal_Bg}>
                    <div className="modal">
                    <ReservationModify keyToBeModified={keyToBeModified} setShowReservationModifyModal={setShowReservationModifyModal}/>
                    </div>
                    <br /><br />
                    <button onClick={() => {
                        console.log('MODIFY MODAL CLOSE');
                        setKeyToBeModified('');
                        setShowReservationModifyModal(false);

                    }}>CANCLE</button>
                </div>
                :
                null
            }
        </div>
    );
}

export default ReservationList;