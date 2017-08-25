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
- archive
- arrow-left
- close
- more-vert
- search
- settings
- share
- like-big
- like-small
- link
- plus
- save-big
- save-small