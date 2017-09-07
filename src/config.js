const SERVER = 'https://iceberg-project.herokuapp.com';

const CLIENT_SECRET = 'SomeRandomCharsAndNumbers';

// TODO когда CLIENT_ID browser добавится на сервере изменить его на дефолтное
let platformId = 'android';
if (typeof window.cordova !== 'undefined') {
    platformId = window.cordova.platformId;
}
const CLIENT_ID = platformId;

const YANDEX_APP_ID = 'de408bbe9e2e47acb701ed948c40f60e';
const VK_APP_ID = '6165083';
const FB_APP_ID = '1960484207530197';

const USER_DATA = localStorage.getItem('IcebergUserData') !== null
    ? JSON.parse(localStorage.getItem('IcebergUserData'))
    : null;

export { SERVER, CLIENT_SECRET, CLIENT_ID, USER_DATA, YANDEX_APP_ID, VK_APP_ID, FB_APP_ID };

