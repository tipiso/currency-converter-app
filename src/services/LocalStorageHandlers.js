export function pushHistoryToLocalStorage(conversionsArray) {
    localStorage.setItem(`conversionsHistory`, JSON.stringify(conversionsArray));
}

export function getHistoryFromLocalStorage() {
    const conversionsHistory = JSON.parse(localStorage.getItem(`conversionsHistory`));
    return conversionsHistory ? conversionsHistory : [];
}

export function removeHistoryFromLocalStorage(){
    localStorage.removeItem('conversionsHistory');
}