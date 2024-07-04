import React, { useState } from "react";



const SignUp = (props) => {

        // hook
        const [uId, setUid] = useState('');
        const [uPw, setUpw] = useState('');
        const [uMail, setUMail] = useState('');
        const [uPhone, setUPhone] = useState('');

        // handler
        const uIdchangeHandler = (e) => {
            console.log('uIdchangeHandler()');

            setUid(e.target.value);
        }
        const uPwchangeHandler = (e) => {
            console.log('uPwchangeHandler()');

            setUpw(e.target.value);
        }

        const uMailchangeHandler = (e) => {
            console.log('uMailchangeHandler()');

            setUMail(e.target.value);
        }

        const uPhonechangeHandler = (e) => {
            console.log('uPhonechangeHandler()');

            setUPhone(e.target.value);
        }

        const signUpBtnClickHandler = () => {
            console.log('signUpBtnClickHandler()');
            
            let memDBInStorage = localStorage.getItem('memberDB');      // String
            if (memDBInStorage === null) {
                let newMberObj = {                                      // Object
                    [uId]: {
                        'uPw': uPw,
                        'uMail': uMail,
                        'uPhone': uPhone,
                    }
                }

                let newMemStr = JSON.stringify(newMberObj);             // String
                localStorage.setItem('memberDB', newMemStr);
            } else {
                let memDBJsObj = JSON.parse(memDBInStorage);            // JS Object
                memDBJsObj[uId] = {
                    'uPw': uPw,
                    'uMail': uMail,
                    'uPhone': uPhone,
                };

                let newMemStr = JSON.stringify(memDBJsObj);             // String
                localStorage.setItem('memberDB', newMemStr);

            }

            let reservationStorage = localStorage.getItem('reservationDB');         // String
            if (reservationStorage === null){

                let newReservationObj = {
                    [uId]: {}
                }
                let newReservagionStr = JSON.stringify(newReservationObj);
                localStorage.setItem('reservationDB', newReservagionStr);
            } else {
                let reservationDBJsObj = JSON.parse(reservationStorage);
                reservationDBJsObj[uId] = {};
                let newReservationStr = JSON.stringify(reservationDBJsObj);
                localStorage.setItem('reservationDB', newReservationStr)
            }

            alert('SIGN UP SUCCESS');

            props.homeViewer(true);
            props.signUpViewer(false);
            props.signInViewer(false);
            props.reservationViewer(false);
            props.reservationListViewer(false);


        }


    return(
        <div>
            <input type="text" name="u_id" onChange={uIdchangeHandler} placeholder="input user ID" />
            <br />
            <input type="password" name="u_pw" onChange={uPwchangeHandler} placeholder="input user PW" />
            <br />
            <input type="text" name="u_mail" onChange={uMailchangeHandler} placeholder="input user MAIL" />
            <br />
            <input type="text" name="u_phone" onChange={uPhonechangeHandler} placeholder="input user PHONE" />
            <br />
            <input type="button" value="SIGN UP" onClick={signUpBtnClickHandler} />
        </div>
    );
}

export default SignUp;