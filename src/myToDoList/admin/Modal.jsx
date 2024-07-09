import React, { useEffect, useState } from "react";
import { convertMapToArray, getMyTodos } from "../js/utils";


const Modal = ({selectedUId,setIsModal}) => {



    //hook 
    const [todoArr, setTodoArr] = useState([]);
    const [filterStatus, setFilterStatus] = useState('ALL');

    useEffect(() => {
        console.log('[Modal] useEffect()');

        let todos = convertMapToArray(getMyTodos(selectedUId));
        setTodoArr(todos.reverse());

    },[]);

    const closeBtnClickHandler = () => {
        console.log('[Modal] closeBtnClickHandler()');
        setIsModal(false);
    }

    const allClickHandler = () => {
        console.log('[Modal] allClickHandler()');
        let todos = convertMapToArray(getMyTodos(selectedUId));
        setTodoArr(todos.reverse());

        setFilterStatus('ALL');
    }

    const completedClickHandler = () => {
        console.log('[Modal] completedClickHandler()');

        let todos = convertMapToArray(getMyTodos(selectedUId));
        let filterdTodos = todos.filter((todo) => {
            return(todo.isComplete === true);

        });

        setTodoArr(filterdTodos.reverse());
        setFilterStatus('COMPLETED');
    }

    const procedingClickHandler = () => {
        console.log('[Modal] procedingClickHandler()');

        let todos = convertMapToArray(getMyTodos(selectedUId));
        let filterdTodos = todos.filter((todo) => {
            return(todo.isComplete !== true);

        });

        setTodoArr(filterdTodos.reverse());
        setFilterStatus('PROCEDING');
    }


    return(
        <div id="admin-modal">
            <div className="admin-modal-content">
                {
                    todoArr.length <= 0
                    ?
                        null
                    :
                    <ul>
                        <li style={{
                            backgroundColor: filterStatus === 'ALL' ? '#b8dffc' : '#fff'
                        }}onClick={allClickHandler}>ALL</li>
                        <li style={{
                            backgroundColor: filterStatus === 'COMPLETED' ? '#b8dffc' : '#fff'
                        }}onClick={completedClickHandler}>Completed</li>
                        <li style={{
                            backgroundColor: filterStatus === 'PROCEDING' ? '#b8dffc' : '#fff'
                        }}onClick={procedingClickHandler}>Proceding</li>
                    </ul>
                }
                {
                    todoArr.length <= 0
                    ?
                        <p style={{
                            textAlign: 'center',
                            color: '#fff',
                            marginTop: '80px',
                            fontSize: '4em',
                            fontWeight: 'bold',
                        }}>There Is No Todo</p>
                    :
                    <>
                        <table>
                        <thead>
                            <tr>
                                <th>Completed</th>
                                <th>ExpirationDate</th>
                                <th>key</th>
                                <th>txt</th>
                                <th>RegDate</th>
                                <th>ModDate</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                            todoArr.map((todo, idx) => {
                                return(
                                    <tr key={idx}>
                                        <td>
                                            {
                                                todo.isComplete ? <b>Completed</b>: <b>Proceding</b>
                                            }
                                        </td>
                                        <td>
                                            {
                                                todo.isComplete 
                                                ?
                                                    <s>{todo.todoExpirationDate}</s>
                                                :

                                                    <>{todo.todoExpirationDate}</>
                                            }
                                        </td>
                                        <td>
                                            {
                                                todo.isComplete
                                                ?
                                                    <s>{todo.key}</s>
                                                :

                                                    <>{todo.key}</>
                                            }
                                        </td>
                                        <td>
                                            {
                                                todo.isComplete
                                                ?
                                                    <s>{todo.todoTxt}</s>
                                                :
                                                    <>{todo.todoTxt}</>
                                                
                                            }
                                        </td>
                                        <td>
                                            {
                                                todo.isComplete
                                                ?
                                                    <s>{todo.todoRegDate}</s>
                                                :
                                                    <>{todo.todoRegDate}</>
                                                
                                            }
                                        </td>
                                        <td>
                                            {
                                                todo.isComplete
                                                ?
                                                    <s>{todo.todoModDate}</s>
                                                :
                                                    <>{todo.todoModDate}</>
                                            }   
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
                </>
                }
                
                    <div className="admin-modal-close" onClick={closeBtnClickHandler}>
                        <button>Close</button>
                    </div>
            </div>
        </div>
    );
}


export default Modal;