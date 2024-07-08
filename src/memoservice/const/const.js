export const MEMBER_DB_IN_LOCAL_STORAGE = 'memoServiceMemberDB';
export const MEMO_DB_IN_LOCAL_STORAGE = 'memoServiceMemoDB';

// FUNCTION
// MEMBER
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

    let memDBInStorage = getMemoServiceMemberDB();      // String
    let memDBJsObj = JSON.parse(memDBInStorage);        // JS Object (All member)

    return memDBJsObj[uId];

}


// MEMO
export const getMemoServiceMemoDB = () => {
    console.log('getMemoServiceMemoDB()');

    return localStorage.getItem(MEMO_DB_IN_LOCAL_STORAGE);

}

export const setMemoServiceMemoDB = (memoDBJsObj) => {
    console.log('setMemoServiceMemoDB()');

    return localStorage.setItem(MEMO_DB_IN_LOCAL_STORAGE, JSON.stringify(memoDBJsObj));

}

export const getMyMemoObjs = (uId) => {
    console.log('getMyMemoObjs()');

    let memoDBInStorage = getMemoServiceMemoDB();       // String

    let memoJsObj = JSON.parse(memoDBInStorage);         // object all
    let memoJsObjs = memoJsObj[uId];                    //object my

    return memoJsObjs;
}


export const setMyMemoObjs = (uId, myMemoObjs) => {
    console.log('setMyMemoObjs()');

    let memoDBInStorage = getMemoServiceMemoDB();
    let memObj = JSON.parse(memoDBInStorage)
    memObj[uId] = myMemoObjs;

    setMemoServiceMemoDB(memObj);
}

export const getToBeModifiedMemoObj = (uId, key) => {
    console.log('getToBeModifiedMemoObj()');

    let memoDBInStorage = getMemoServiceMemoDB();       //String
    let memDBJsObj = JSON.parse(memoDBInStorage);       //Obj
    let myMemos = memDBJsObj[uId];          // my memos
    let toBeModifiedMemoObj = myMemos[key]; // my memo
    return toBeModifiedMemoObj;
}