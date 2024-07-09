let loginedSessionID = '';
let adminLogiendSessionID = '';

// User Session
export const getLoginedSessionID = () => {
    console.log('[Session] getLoginedSessionID()');

    return loginedSessionID;
}

export const setLoginedSessionID = (id = '') => {
    console.log('[Session] setLoginedSessionID()');

    loginedSessionID = id;
}

// Admin Session

export const getAdminLoginedSessionID = () => {
    console.log('[Session] getAdminLoginedSessionID()' )
    
    return adminLogiendSessionID;
}
export const setAdminLoginedSessionID = (id = '') => {
    console.log('[Session] setAdminLoginedSessionID()' )
    
    adminLogiendSessionID = id;

}