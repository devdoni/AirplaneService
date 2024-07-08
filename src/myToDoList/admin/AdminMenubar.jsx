import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const AdminMenubar = () => {

    // Hook
    const [isAdminSignined, SetIsAdminSignined] = useState(false);


    return(
        <>
            <div className="admin-menubar">
                <Link to='/'>User Mode</Link>
                {
                    isAdminSignined
                    ?
                    <>
                        <Link to='/adminsignin'>Admin SignOut</Link>
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