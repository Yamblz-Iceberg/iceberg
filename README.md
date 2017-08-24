# Iceberg

## Используемые технологии

1. Kebab-case для названий папок;
2. Component + SASS;
3. SASS + БЭМ;
4. 4 пробела;
5. Cordova;
6. React + Redux + Thunk;
7. Webpack + Jest;
8. ESLint с конфигом от Airbnb.

## NPM-скрипты

1. `npm start` – запуск сервера (development);
2. `npm run build` – билд проекта (production);
3. `npm run patch` – патч для платформы iOS (необходимо запустить после `cordova platform add ios`);
4. `cordova platform add ios/android` – добавление платформы;
5. `cordova run ios/android` – билд статики в эмулятор;

## Пример структуры проекта

```
src/
  components/
    parts
    elements
    pages
    blocks/
      card/
        index.js
        card.js
        card.scss
        card.test.js
  reducers/
    card.js
  services/
  utils/
  assets/
    img/
```
