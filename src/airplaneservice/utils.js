// 개발자모드 on / off
// let prodFlag = false;

export const setProdFlag = (flag) => {
        prodFlag = flag;
}

export const getProdFlag = () => {
        return prodFlag;
}

export const getCurrentDateTime = () => {
    console.log('getDateTime()')

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let Milliseconds = now.getMilliseconds();

    return `${year}${month}${date}${hours}${minutes}${seconds}${Milliseconds}`;
}

// get current time info 