import { COOKIES } from '../constants/defaults';

export function getCookie(name:string =  COOKIES.KEY) {
    const pattern  = new RegExp(`${ name }=(.[^;]*)`);
    const matches = document.cookie.match(pattern) ;

    if (!matches) { return; }

    return matches[1];
}

export function  setCookie(value:string, name:string = COOKIES.KEY, days:number = COOKIES.TIME_TO_LIVE) {
    let expires:string = '';

    if (days) {
        const date: Date = new Date();

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${ date.toUTCString() }`;
    }

    document.cookie = `${ name }=${ value + expires }; path=/`;
}

export function deleteCookie(name:string = COOKIES.KEY, value: string = '') {
    const date: Date = new Date();

    date.setTime(date.getTime() - (1000 * 60 * 60 * 24));
    const expires = `; expires=${ date.toUTCString() }`;

    document.cookie = `${ name }=${ value + expires }; path=/`;
}
