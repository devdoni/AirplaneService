import React, { useEffect, useState } from "react";
import MemoModifyModal from "./MemoModifyModal.jsx";
import { getMyMemoObjs, setMyMemoObjs } from '../const/const.js';
import { getLoginedSessionID, } from '../session.js';
import { convertMapToArray } from '../utils.js';


const MemoList = () => {

    //hook
    const [myMemoArr, setMyMemoArr] = useState([]);
    const [keyToBeModified, setKeyToBeModified] = useState('');
    const [showMemoModifyModal, setShowMemoModifyModal ] = useState(false);
    const [tempFlag, setTempFlag] = useState(false);


    useEffect(() => {
        console.log('useEffect()');

        let myMemoObjs = getMyMemoObjs(getLoginedSessionID());

        setMyMemoArr(convertMapToArray(myMemoObjs).reverse());
                
      }, [tempFlag,setShowMemoModifyModal]);

      // handler
      const modifyBtnClickHandler = (e, key) => {
        console.log('modifyBtnClickHandler()');

        setKeyToBeModified(key);
        setShowMemoModifyModal(true);

      }
      const deleteBtnClickHandler = (e, key) => {
        console.log('deleteBtnClickHandler()');

        let result = window.confirm('Really?');
        if (result) {
            let myMemoObjs = getMyMemoObjs(getLoginedSessionID());
            delete myMemoObjs[key];

            setMyMemoObjs(getLoginedSessionID(), myMemoObjs);

            alert('Delete my memo delete');

            setTempFlag(p => !p);

        } else {
            alert('Delete my memo canled')
        }
      }
      
    return(
        <div id="memo_list">
            <ul>
                {
                    myMemoArr.map((myMemo, idx) => 
                            
                                <li key={idx} style={{
                                    textAlign: 'left',
                                }
                                }>
                                    [<span style={{
                                        display: 'inline-block',
                                        width: '150px'
                                    }}
                                    >{myMemo.key}</span>]
                                    &nbsp;&nbsp;
                                    <span style={{
                                        display: 'inline-block',
                                        width: '250px'
                                    }}
                                    >{myMemo.mTxt}</span>
                                    &nbsp;&nbsp;
                                    {myMemo.mRegDate}
                                    &nbsp;&nbsp;
                                    {myMemo.mModDate}
                                    &nbsp;&nbsp;
                                    <button className="basic_btn" onClick={(e) => modifyBtnClickHandler(e, myMemo.key)}>MOD</button>
                                    <button className="basic_btn" onClick={deleteBtnClickHandler(e, myMemo.key)}>DEL</button>
                                </li>
                    )
                }
            </ul>

            
                    {
                    showMemoModifyModal
                    ?
                    <div className="=modalbg">
                        <div className="modal">
                            <MemoModifyModal  keyToBeModified={keyToBeModified}
                                              setShowMemoModifyModal={setShowMemoModifyModal}/>
                            <button className="basic_btn" onClick={() => {
                                console.log('ModifyCanle()');

                                setShowMemoModifyModal(false);
                                setKeyToBeModified('');
                            }}>MODIFY CANLE</button>
                        </div>
                    </div>
                    :
                    null
                    }

        </div>
    );
}

export default MemoList;