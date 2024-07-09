import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { setAdminLoginedSessionID } from "../js/session";


const AdminMenubar = (props) => {

    // Hook
    const [isAdminSignIned, setIsAdminSignIned] = useState(false);

    useEffect(() => {
        console.log('[AdminMenubar] useEffect()');

        setIsAdminSignIned(props.isAdminSignIned);


    })
    const adminSignOutClickHandler = () => {
        console.log('[AdminMenubar] adminSignOutClickHandler');

        setAdminLoginedSessionID('');
        props.setIsAdminSignIned(false);
    }

    return(
        <>
            <div className="admin-menubar">
                <Link to='/'>User Mode</Link>
                {
                    isAdminSignIned
                    ?
                    <>
                        <Link to='/adminsignin' onClick={adminSignOutClickHandler}>Admin SignOut</Link>
                        <Link to='/adminmemberlist'>User MemberList</Link>
                    </>
                    :
                    <>
                        <Link to='/adminsignin'>Admin SignIn</Link>
                    </>
                }
            </div>
            <Outlet />
        </>
    );
}


export default AdminMenubar;