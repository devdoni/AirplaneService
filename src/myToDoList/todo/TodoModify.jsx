import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDateTime, getMyTodos, getTobeModifyiedTodo, replaceDateTime, setMyTodos } from "../js/utils";
import { getLoginedSessionID } from "../js/session";


const TodoModify = () => {




    //hook
    const [todoTxt, SetTodoTxt]= useState('');
    const navigate = useNavigate();

    const {uId, todokey} = useParams();

    useEffect(() => {
        console.log('[TodoModify] useEffect()');
        let toBeModfiyiedTodo = getTobeModifyiedTodo(uId, todokey)
        SetTodoTxt(toBeModfiyiedTodo.todoTxt);
    }, []);

    //handler

    const todoTxtChangeHandler = (e) => {
        console.log('[TodoModify] todoTxtChangeHandler');
        SetTodoTxt(e.target.value);
        
    }
    
    const modifyBtnClickHandler = () => {
        console.log('[TodoModify] modifyBtnClickHandler');

        let myTodos = getMyTodos(uId);

        myTodos[todokey].todoTxt = todoTxt;
        myTodos[todokey].todoDateTime = getDateTime();

        setMyTodos(uId, myTodos);

        alert('Modify Success');
        navigate('/todolist');
        
    }
    
    return(
        <div className="todo-modify">
            <h3>TODO MODIFY</h3>
            <input type="text" className="txt-large" value={todoTxt} onChange={todoTxtChangeHandler}/>
            <br />
            <button className="btn-basic" onClick={modifyBtnClickHandler}>MODIFY</button>
        </div>
    );
}


export default TodoModify;