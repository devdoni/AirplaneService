import React, { useState } from "react";
import { getMemoServiceMemoDB, getMyMemoObjs, setMemoServiceMemoDB, setMyMemoObjs } from '../const/const.js';
import { getLoginedSessionID } from '../session.js';
import {getCurrentDateTime} from '../utils.js';

const Memo = (props) => {

    //Hook
    const [memoTxt, SetMemoTxt] = useState('');

    const memoTxtChangeHandler = (e) => {
        console.log('memoTxtChangeHandler()');

        SetMemoTxt(e.target.value);
    }

    const writeBtnClickHandler = () => {
        console.log('writeBtnClickHandler()');

        let myMemoObjs = getMyMemoObjs(getLoginedSessionID());
        myMemoObjs[getCurrentDateTime()] = {
            'mTxt' : memoTxt,
            'mRegDate' : getCurrentDateTime(),
            'mModDate' : getCurrentDateTime(),
        }
        
        setMyMemoObjs(getLoginedSessionID(), myMemoObjs);

        alert('Memo Write Success');

        SetMemoTxt('');

        props.homeViewer(false);         //view change
        props.signUpViewer(false);
        props.signInViewer(false);
        props.modifyViewer(false);
        props.memoViewer(false);
        props.memoListViewer(true);
        

    }
    return(
        <div id="memo">
            <input type="text" name="mTxt" className="txt_field" value={memoTxt} onChange={memoTxtChangeHandler} placeholder="Input Memo"/>
            <br />
            <button className="basic_btn" onClick={writeBtnClickHandler}>
                WRITE
            </button>
        </div>
    );
}

export default Memo;