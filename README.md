# Iceberg

## Запуск приложения

1. Склонировать проект локально: `git clone https://github.com/Yamblz-Iceberg/iceberg-app.git`;
1. Перейти в директорию проекта: `cd iceberg`;
1. Установить зависимости: `npm i`;
1. Установить нужные платформы: 
    - Android `cordova platform add android`;
    - iOS `cordova platform add ios` (если при установке платформы iOS возникает ошибка 'Error: Cannot read property 'replace' of undefined', то необходимо выполните команду `npm run patch`).

### Команды для запуска проекта:
- В браузере в режиме **livereload**: `npm start`;
- На устройстве Android: `npm run android-device`;
- В эмуляторе Android по умолчанию: `npm run android-emulator`;
- На устройстве iOS: `npm run ios-device`;
- В эмуляторе iOS по умолчанию: `npm run ios-emulator`.
