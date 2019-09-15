# Laborit Test

  ### dependencies

- Node 10.x.x
- Mysql

## install

### 1. clone and install npm packages

```
git clone https://github.com/edrcosta/api-node-js-enterview
cd api-node-js-enterview/
npm install
```

### 2. environment config files...

- copy file `/database/config/config-sample.json` and rename as `/database/config/config.json`

- copy file `/config-sample.json` and rename as `/config.json`

	**change to your settings in both config.json files**

### 3. setup database

this project is using sequelize ORM migrations, to simplify changes in database.
```
npm install -g sequelize-cli
cd database/
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Execute Development

	**back to project root folder `api-node-js-enterview/`**

```
npm run-script build
npm start
```

you must see "listening on port 3000 :)" on your terminal

### Tests 

to run tests on root folder run the follow command

```
npm test
```

### Available Scripts:

-  `build` - transpile TypeScript to ES6,
-  `build:watch` - interactive watch mode to automatically transpile source files to js.
-  `test` - run tests,
-  `test:watch` - interactive watch mode to automatically re-run tests