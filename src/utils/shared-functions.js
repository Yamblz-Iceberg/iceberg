export const getDomain = (url) => {
    const prefix = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?/i;
    return url.replace(prefix, '');
};

export const compareLinks = (link1, link2) => (
    getDomain(link1) === getDomain(link2)
);

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
