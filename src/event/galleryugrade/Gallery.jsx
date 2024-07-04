import React, { useState } from "react";
import './gallery.css'
import Thums from "./thums";
    

const Gallery = () => {

    // Hook
    const [isShow, setIshow] = useState(false);     // modal state

    const [picNo, setPicNo] = useState(1);          // pic no state
    // Handler

    const modalBgClickHandler = () => {
        console.log('modalBgClickHandler()');

        setIshow(false);

    }

    const arrowBtnClickHandler = (btnName) => {
        console.log('arrowBtnClickHandler()');
        console.log('btnName:', btnName );

        let tempNo;
        switch(btnName) {
            case 'leftArBtn':
                tempNo= picNo;
                tempNo--;
                if (tempNo <= 0) tempNo = 5;
                setPicNo(tempNo);
            break;
            case 'rightArBtn':
                tempNo= picNo;
                tempNo++;
                if (tempNo > 5) tempNo = 1;
                setPicNo(tempNo);
            break;
        }
        

    }
    // const thumClickHandler = (pn) => {
    //     console.log('thumClickHandler()')
    //     console.log('pn: ', pn)

    //     setIshow(true);
    //     setPicNo(pn);
    // }

    return(
        <div id="wrap">
            <div className="thums">
                <Thums pNo="1" setIshow={setIshow} setPicNo={setPicNo}/>
                <Thums pNo="2" setIshow={setIshow} setPicNo={setPicNo}/>
                <Thums pNo="3" setIshow={setIshow} setPicNo={setPicNo}/>
                <Thums pNo="4" setIshow={setIshow} setPicNo={setPicNo}/>
                <Thums pNo="5" setIshow={setIshow} setPicNo={setPicNo}/>
                {/* {<div>
                    <a href="#none" onClick={() => thumClickHandler(1)} >
                        <img className="thum" src="/resources/event/imgs/pic01.jpg" />
                    </a>
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(2)}>
                        <img className="thum" src="/resources/event/imgs/pic02.jpg" />
                    </a>    
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(3)}>
                        <img className="thum" src="/resources/event/imgs/pic03.jpg" />
                    </a>    
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(4)}>
                        <img className="thum" src="/resources/event/imgs/pic04.jpg" />
                    </a>
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(5)}>
                        <img className="thum" src="/resources/event/imgs/pic05.jpg" />
                        </a>
                </div> */}
            </div>
            {
                isShow
                ?
                    <div className="modal_bg" onClick={modalBgClickHandler}>
                        <div className="left_arrow">
                            <a href="#none">
                                <img src="/resources/event/imgs/left_arrow.png" onClick={() => arrowBtnClickHandler('leftArBtn')} />
                            </a>
                            <div className="modal">
                            <a href="#none">
                                <img src={`/resources/event/imgs/pic0${picNo}.jpg`} />
                                <br />
                                <a href="#none" style={{color: '#fff',font_weight: 'bold'}}
                                 onClick={modalBgClickHandler}>CLOSE</a>

                            </a>
                        </div>
                        <div className="right_arrow">
                            <a href="#none">
                                <img src="/resources/event/imgs/right_arrow.png" onClick={() => arrowBtnClickHandler('rightArBtn')} />
                            </a>
                        </div>

                        </div>
                    </div> 
                :
                <>
                </>

            }

        </div>
    );
}

export default Gallery;