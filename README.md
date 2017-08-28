# Iceberg

## Используемые технологии

1. Kebab-case для названий папок;
1. Component + SASS;
1. SASS + БЭМ;
1. 4 пробела;
1. Cordova;
1. React + Redux + Thunk;
1. Webpack + Jest;
1. ESLint с конфигом от Airbnb.

## NPM-скрипты

- `npm start` – запуск сервера (development);
- `npm run build` – билд проекта (production);
- `npm run patch` – патч для платформы iOS (необходимо запустить после `cordova platform add ios`);
- `cordova platform add ios/android` – добавление платформы;
- `cordova run ios/android` – билд статики в эмулятор;
- `npm run android-device` – билд в production и запуск на андроид устройстве;

## Пример структуры проекта

```text
.
├── components
│   ├── blocks
│   │   ├── hash-tape
│   │   │   ├── hash-tape.js
│   │   │   ├── hash-tape.scss
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── tabs
│   │       ├── index.js
│   │       ├── tabs.js
│   │       └── tabs.scss
│   ├── elements
│   │   ├── hash-tag
│   │   │   ├── hash-tag.js
│   │   │   ├── hash-tag.scss
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── tab-item
│   │       ├── index.js
│   │       ├── tab-item.js
│   │       └── tab-item.scss
│   └── pages
│       └── Home.js
├── index.html
├── index.js
├── reducers
│   └── index.js
└── styles.scss
```

#### Имена иконок в `icons-sprite.svg`
- search
- themes
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


### Запуск приложения

1. Склонировать проект локально:

`git clone https://github.com/batogov/iceberg.git`

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
