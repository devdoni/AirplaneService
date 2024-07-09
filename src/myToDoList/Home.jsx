import React, { useEffect, useState } from "react";
import { createRandNum } from "./js/utils";
import Top from './Top';


const Home = () => {

    //Hook

    const [imgNo, setImgNo] = useState(100);

    useEffect(() => {
        console.log('[HOME] useEffect');
        
        setImgNo(createRandNum(10,100));
    }, [])

    return(
        <>
            <div className="home">
                <h3>Our service is TODO-LIST</h3>
                <img src={`https://picsum.photos/id/${imgNo}/1000/600`}/>
                <br />
                <img src={`https://picsum.photos/id/${imgNo + 1}/1000/600`}/>
                <br />
                <img src={`https://picsum.photos/id/${imgNo + 2}/1000/600`}/>
            </div>
            <Top />
        </>
    );
}


export default Home;