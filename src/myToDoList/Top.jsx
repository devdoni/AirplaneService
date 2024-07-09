import React, { useEffect, useState } from "react";

const Top = () => {

    const [isTopArrow, setIsTopArrow] = useState(false);

    useEffect(() => {
        console.log('[Top] useEffect()');

        const handleIsTopArrow = () => {
            if (window.scrollY > 200) {
                setIsTopArrow(true);
            } else {
                setIsTopArrow(false);
            }
        }
        window.addEventListener('scroll', handleIsTopArrow);
    }, []);

    //handler 
    const topArrowClickHandler = () => {
        console.log('[TOP] topArrowClickHandler()');

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    }

    return(
        <>
            {
                isTopArrow
                ?
                <div id="top-arrow" onClick={topArrowClickHandler}>
                    top
                </div>
                :
                null
            }

        </>

    );
}

export default Top; 