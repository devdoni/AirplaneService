export const MEMBER_DB_IN_LOCAL_STORAGE = 'memoServiceMemberDB'
export const MEMO_DB_IN_LOCAL_STORAGE = 'memoServiceMemoDB'

// FUNCTION
export const getMemoServiceMemberDB = () => {
    console.log('getMemoServiceMemberDB()');

    return localStorage.getItem(MEMBER_DB_IN_LOCAL_STORAGE);

}

export const setMemoServiceMemberDB = (memDBJsObj) => {
    console.log('setMemoServiceMemberDB()');

    localStorage.setItem(MEMBER_DB_IN_LOCAL_STORAGE, JSON.stringify(memDBJsObj));

}

export const getMyMemObj = (uId) => {
    console.log('getMyMemObj()');

    let memDBInStorage  = getMemoServiceMemberDB();       // String
    let memDBJsObj      = JSON.parse(memDBInStorage);        // Js Obj (All member)

    return memDBJsObj[uId];
}
// Member End

// Memo
export const getMemoServiceMemoDB = () => {
    console.log('getMemoServiceMemoDB()');

    return localStorage.getItem(MEMO_DB_IN_LOCAL_STORAGE);
}

export const setMemoServiceMemoDB = (memoDBJsObj) => {
    console.log('setMemoServiceMemoDB()');

    return localStorage.setItem(MEMO_DB_IN_LOCAL_STORAGE, JSON.stringify(memoDBJsObj));
}