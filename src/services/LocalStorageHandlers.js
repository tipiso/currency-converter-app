export function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
}

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