/*
Если переданная строка – цвет в hex, то функция 
возвращает его в форме RGB.
*/
export const hexToRGB = (color) => {
    if (!color.match(/^#[0-9a-f]{3,6}$/i)) {
        return color;
    }
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
};

/*
Функция возвращает домен с убранными префиксами (например, "http://" или "www.").
*/
export const getDomain = (url) => {
    const prefix = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?/i;
    return url.replace(prefix, '');
};

export const compareLinks = (link1, link2) => (
    getDomain(link1) === getDomain(link2)
);

/*
Функция возвращает 128-битный идентификатор, который используется для
генерации данных демо-пользователя.
*/
export const generateGuid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}`;
};

export const handleClickToCollection = (e, cardId, history) => {
    const { className } = e.target;

    if (className !== 'hash-tag'
        && className !== 'card-footer__user'
        && className !== 'card-footer__actions'
        && className !== 'card-footer__save-action'
        && (typeof className.baseVal === 'undefined'
            || (className.baseVal
            && className.baseVal.trim() !== 'svg-icon'))) {
        history.push({ pathname: `/collection/${cardId}` });
    }
};

export const authDemoUser = (registerFn, callback) => {
    const userId = generateGuid();
    const userPassword = generateGuid();
    const firstName = 'Демо';
    const lastName = 'Пользователь';
    registerFn(userId, userPassword, firstName, lastName, callback);
};

export const socialSharing = (subject, message) => {
    const options = {
        subject,
        message,
        url: 'https://yandex.ru',
        chooserTitle: 'Pick an app',
    };

    window.plugins.socialsharing.shareWithOptions(options);
};
