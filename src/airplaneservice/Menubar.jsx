import React, { useState } from "react";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Reservation from "./Reservation";
import ReservationList from "./ReservationList";

const Menubar = () => {

    // hook
    const [isHome, setIsHome] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isRservation, setIsReservation] = useState(false);
    const [isRservationList, setIsReservationList] = useState(false);

    const [isLogined, setIsLogined] = useState(false);

    // Handler
    const homeClickHandler = () => {
        console.log('homeClickHandler()');

        setIsHome(true);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(false);

    }
    
    const SignOutClickHandler = () => {
        console.log('SignOutClickHandler()');

        setIsHome(true);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(false);

        setIsLogined(false);
    }

    const SignUpClickHandler = () => {
        console.log('SignUpClickHandler()');

        setIsHome(false);
        setIsSignUp(true);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(false);

    }

    const SignInClickHandler = () => {
        console.log('SignInClickHandler()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(true);
        setIsReservation(false);
        setIsReservationList(false);

    }

    const ReservationClickHandler = () => {
        console.log('ReservationClickHandler()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(true);
        setIsReservationList(false);

    }

    const ReservationListClickHandler = () => {
        console.log('ReservationListClickHandler()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(true);

    }


    return(
        <>
            <div>
                <a href="#none" onClick={homeClickHandler}>HOME</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                {
                    isLogined
                    ?
                    <>
                        <a href="#none" onClick={SignOutClickHandler}>SIGN-OUT</a>
                        &nbsp;&nbsp; | &nbsp;&nbsp;
                    </>
                    :
                    <>
                        <a href="#none" onClick={SignUpClickHandler}>SIGN-UP</a>
                        &nbsp;&nbsp; | &nbsp;&nbsp;
                        <a href="#none" onClick={SignInClickHandler}>SIGN-IN</a>
                        &nbsp;&nbsp; | &nbsp;&nbsp;
                    </>

                }

                <a href="#none" onClick={ReservationClickHandler}>RESERVATION</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a href="#none" onClick={ReservationListClickHandler}>RESERVATION-LIST</a>
                
            </div>
            {
                isHome
                ?
                <Home />
                :
                null
            }
            {
                isSignUp
                ?
                <SignUp 
                homeViewer={setIsHome} 
                signUpViewer={setIsSignUp} 
                signInViewer={setIsSignIn} 
                reservationViewer={setIsReservation}
                reservationListViewer={setIsReservationList}/>
                :  
                null
            }
            {
                isSignIn
                ?
                <SignIn/>
                :
                null
            }
            {
                isRservation
                ?
                <Reservation />
                :
                null
            }
            {
                isRservationList
                ?
                <ReservationList />
                :
                null
            }

        </>
    );
    
}

export default Menubar;