type Key = 'theme' | 'user';

export const setItem = ( key: Key, data: any) => {
    window.localStorage.setItem(key, JSON.stringify( data ))
}

export const getItem = ( key: Key ) => {
    const localStorage = window.localStorage.getItem(key);
    return JSON.parse(localStorage);
}