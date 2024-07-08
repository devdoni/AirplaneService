import React from "react";
import { useParams } from "react-router-dom";

const SignUp = () => {

    //Hook

    const {param1, param2} = useParams();

    return(
        <>
            SignUp
            <br />
            {param1}, {param2}
        </>

    );
}

export default SignUp;