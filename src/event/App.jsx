import React, { useState } from "react";
import './wrap.css';
const App = () => {

    // Hook(함수)
    const [isOn, setIson] = useState(true);


    // Event Handler
    const btn1ClickHandler = (e) => {
        console.log('btn1ClickHandler CLICKED');
        console.log('e Obj:', e);
    }

    const btn2ClickHandler = (e) => {
        console.log('btn2ClickHandler CLICKED');
        console.log('e.target: ', e.target);

        console.log('isOn: ', isOn);        // true
         // setIson(false);
            setIson(v => !v);
        console.log('isOn: ', isOn);        

    }

    const btn3ClickHandler = (e, str) => {
        console.log('btn3ClickHandler CLICKED');
        console.log('e :', e)
        console.log('str :', str)

    }

    return(
        <>
            <div id='wrap'>
                <button className="btn1" onClick={btn1ClickHandler}>button01</button>
                <br />
                <button className="btn2" onClick={btn2ClickHandler}>
                    {
                        isOn ? "Switch OFF" : 'Switch ON'
                    }
                </button>
                
                {/*<button className="btn3" onClick={btn3ClickHandler}>button03</button>*/}
                {/*<button className="btn3" onClick={() => btn3ClickHandler('abc')}>button03</button>*/}
                <button className="btn3" onClick={(e) => btn3ClickHandler(e, 'abc')}>button03</button>
                <br />
            </div>
        </>
    );
}

export default App;