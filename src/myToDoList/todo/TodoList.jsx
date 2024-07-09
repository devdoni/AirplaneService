import React, { useEffect, useState } from "react";
import { getLoginedSessionID } from "../js/session";
import { useNavigate } from "react-router-dom";
import { getMyTodos, setMyTodos } from "../js/utils";


const TodoList = () => {

    //hook 
    const [myTodoArr, setMyTodoArr] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        console.log('[TodoList] useEffect()');

        if (getLoginedSessionID() === '') {
            alert('Please Sign in');
            navigate('/signin');
            return; 
        }
        refreshMyTodoArr()

    }, [refresh]);

    // handler 
    const completeBtnClickHandler = (e, key) => {
        console.log('[TodoList] completeBtnClickHandler()');
        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[key].isComPlete = true;
        
        setMyTodos(getLoginedSessionID(), myTodos);

        refreshMyTodoArr();

    }

    const inCompleteBtnClickHandler = (e, key) => {
        console.log('[TodoList] inCompleteBtnClickHandler()');
        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[key].isComPlete = false;
        
        setMyTodos(getLoginedSessionID(), myTodos);

        refreshMyTodoArr();
    }

    const modifyBtnClickHandler = (e, key) => {
        console.log('[TodoList] modifyBtnClickHandler()');

        navigate(`/todomodify/${getLoginedSessionID()}/${key}`);

    }

    const deleteBtnClickHandler = (e, key) => {
        console.log('[TodoList] deleteBtnClickHandler()');

        let result = window.confirm('Really');
        if(result) {
            let myTodos = getMyTodos(getLoginedSessionID());
            delete myTodos[key];

            setMyTodos(getLoginedSessionID(), myTodos);

            alert('Delete Success');

            setRefresh(v => !v);
        } else {

            alert('Delete Canceled');
        }
        

    }


    // function
    const refreshMyTodoArr = () => {
        console.log('[ToDoList refreshMyTodoArr()')

        let myTodos = getMyTodos(getLoginedSessionID());
        let keys = Object.keys(myTodos);

        let arr = [];
        for(let i = 0; i < keys.length; i++) {
            let myTodo = myTodos[keys[i]];
            myTodo['key'] = keys[i];
            arr.push(myTodo);
        }

        setMyTodoArr(arr.reverse());
    }
    return(
        <div className="todo-list">
            <h3>TODO LIST</h3>
            <ul>
                {
                    myTodoArr.map((todo, idx) => {
                      return(
                        <li key={idx} className="todo-li">
                            <div>
                                <span>{!todo.isComPlete ? <b>[Proceding]</b> : <b>[ComPlete]</b> }</span>
                                <span><b>[{todo.todoExpirationDate}]</b></span>&nbsp;
                                <span className={!todo.isComPlete ?"todo-txt":"todo-txt-completed"}>{todo.todoTxt}</span>
                                {
                                    todo.isComPlete !== true
                                    ?
                                    <>
                                        <button className="btn-basic" onClick={(e) => completeBtnClickHandler(e, todo.key)}>Complete</button>
                                        <button className="btn-basic" onClick={(e) => modifyBtnClickHandler(e, todo.key)}>Modify</button>
                                    </>
                                    :
                                    <>
                                        <button className="btn-basic" onClick={(e) => inCompleteBtnClickHandler(e, todo.key)}>inComplete</button>
                                    </>
                                }
                                <button className="btn-basic" onClick={(e) => deleteBtnClickHandler(e, todo.key)}>Delete</button>
                                
                            </div>

                        </li>
                      );  
                    })
                }
            </ul>
            
        </div>
    );
}


export default TodoList;