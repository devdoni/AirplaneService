import React, { useState } from "react";
import './App2.css';



    const unDownBtnHandler = () => {
        console.log('unDownBtnHandler()');

        setIsShow(v => !v)
    }

const App2 = () => {

        // Hook

        const[isShow, setIsShow] = useState(false);

        // Event Handler
        
    return(
        <div id="menu_wrap">
            {
                isShow
                ?
                <>
                    <div className="menus">
                         <img src="/resources/event/imgs/866-1000x200.jpg" />
                    </div>
                    <div className="up_down_arrow" onClick={unDownBtnHandler}>
                        <a href="#none">
                    <img src="/resources/event/imgs/up_arrow.png" />
                        </a>
            </div>
                </>
                :
                <>
                    <div className="up_down_arrow " onClick={unDownBtnHandler}>
                        <a href="#none">
                        <img src="/resources/event/imgs/Down_arrow.png" />
                        </a>
                    </div>
                </>

            }


        </div>

    );
}

export default App2;