let loginedSessionID= '';

// getter & setter 함수

export const setLoginedSessionID = (id = '') => {
    console.log('setLoginedSessionID()')

    loginedSessionID = id;
}

export const getLoginedSessionID = (id) => {
    console.log('getLoginedSessionID()')

    return loginedSessionID;

}