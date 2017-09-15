# Iceberg

## NPM-скрипты

### Запуск приложения

1. Склонировать проект локально:

`git clone https://github.com/Yamblz-Iceberg/iceberg-app.git`

1. Перейти в директорию проекта: `cd iceberg`

1. Установить зависимости: `npm i`

1. Установить нужные платформы: 
- Android `cordova platform add android`
- iOS `cordova platform add ios`

Если при установке платформы IOS возникает ошибка 'Error: Cannot read property 'replace' of undefined', то предварительно выполните команду: `npm run patch`

1. Команды для запуска проекта:
- в браузере в режиме **livereload**: `npm start`
- на устройстве Android: `npm run android-device`
- в эмуляторе Android по умолчанию: `npm run android-emulator`
- на устройстве iOS: `npm run ios-device`
- в эмуляторе iOS по умолчанию: `npm run ios-emulator`

#### Имена иконок в `icons-sprite.svg`
- search
- theme
- arrow-back
- arrow-details
- account
- close
- more-vert
- settings
- share
- like-big
- like-small
- link
- plus
- save-big
- save-small
- question
- flash
- arrow-more--popup
- edit
- picture
- lock
- filter
- dropdown
- double-links
- iceberg
- onboard1
- onboard2
- onboard3
- onboard4
- home
- titanic
- empty-profile
- like-filled
- exit

#### Сборка спрайта с иконками с их предварительной оптимизацией

1. Необходимо установить глобально `svgo` (для оптимизации иконок) и `svgstore` (для сборки отдельных иконок в спрайт).
Для этого нужно выполнить следующую команду: `npm install -g svgo && npm install -g svgstore`.

1. Перед добавлением иконки в спрайт необходимо немного подготовить иконку:

- положите иконку в директорию `generate-icons-sprite/icons`
- переименуйте её, чтобы название могло описать содержимое, используйте **kebab-case** в написании
- если иконка универсальная и одноцветная, то замените значение свойства **fill** в коде на `currentColor`

1. Добавьте заданные в коде иконки размеры в дефолтные в компоненте `Icon`

1. Добавьте название иконки в Readme

1. Чтобы собрать спрайт выполните скрипт `generate-icons-sprite/create-icons-sprite`

