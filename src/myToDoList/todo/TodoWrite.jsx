import React, { useEffect, useState } from "react";
import { getDateTime, getMyTodos, replaceDateTime, setMyTodos } from "../js/utils";
import { getLoginedSessionID } from "../js/session";
import { useNavigate } from "react-router-dom";


const TodoWrite = () => {

    //hook
    const [todoTxt, SetTodoTxt]= useState('');
    const [expirationDate, setExpirationDate]= useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('[TODOWRITE] useEffect()')

        if (getLoginedSessionID() === '') {
            alert('Please Sign in');

            navigate('/signin');
            return; 
        }

    }, []);

    //handler

    const todoTxtChangeHandler = (e) => {
        console.log('[TODOWRITE] todoTxtChangeHandler');
        SetTodoTxt(e.target.value);
        
    }
    const expirationDateChangeHandler = (e) => {
        console.log('[TODOWRITE] expirationDateChangeHandler');            // 2024-07-13 -> 20240713
        setExpirationDate(e.target.value.replaceAll('-', ''));  // 20240713

    }
    const writeBtnClickHandler = () => {
        console.log('[TODOWRITE] writeBtnClickHandler');

        if (todoTxt === null || todoTxt === undefined || todoTxt === '' || expirationDate === undefined || expirationDate === '') {
            alert('PLEASE INPUT TODO TEXT OR EXPIRATION DATE');
            return;

        }

        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[replaceDateTime(getDateTime())] = {
            'todoTxt': todoTxt,
            'todoExpirationDate': expirationDate,
            'todoRegDate': getDateTime(),
            'todoModDate': getDateTime(),

        }
        setMyTodos(getLoginedSessionID(), myTodos);

        alert('TODO WRITE SUCCESS');

        navigate('/todolist');
        
    }

    return(
        <div className="todo-write">
            <h3>TODO WRITE</h3>
            <input type="text" className="txt-large" onChange={todoTxtChangeHandler}/>
            <input type="date" onChange={expirationDateChangeHandler} />
            <br />
            <button className="btn-basic" onClick={writeBtnClickHandler}>WRITE</button>
        </div>
    );
}


export default TodoWrite;