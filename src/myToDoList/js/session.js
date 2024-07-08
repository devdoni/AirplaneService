let loginedSessionID = '';

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