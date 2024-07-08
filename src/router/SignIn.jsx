import React from "react";
import { useSearchParams } from "react-router-dom";

const SignIn = () => {

    //Hook 
    const [searchParams, SetSearchParams] = useSearchParams();

    const param1 = searchParams.get('param1');
    const param2 = searchParams.get('param2');
    return(
        <>
            SignIn
            <br />
            {param1}, {param2}
        </>

    );
}

export default SignIn;