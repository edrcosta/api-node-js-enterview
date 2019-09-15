# Laborit Test

### dependencies

- Node 10.x.x
- Mysql

## install

1. clone and install npm packages

```
git clone https://github.com/edrcosta/api-node-js-enterview
cd api-node-js-enterview/
npm install
```

2. environment config files...
 
- change database settings on file `/database/config/config.json`.
**by default is set to development environment**
  
- if you want change enviroment settings or jwt secret on file `/config.json`

3. Install sequelize cli and run migration to setup your database

```
npm install -g sequelize-cli
cd database/
npx sequelize-cli db:migrate
```

## Execute Development

```
cd laborit-test/
npm build:watch
npm start
```

### Scripts:
  
-  `build` - transpile TypeScript to ES6,
-  `build:watch` - interactive watch mode to automatically transpile source files,
-  `test` - run tests,
-  `test:watch` - interactive watch mode to automatically re-run tests