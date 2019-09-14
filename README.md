
# Laborit Test 

### dependencies

 - Node 10.x.x 
 - Mysql 

## install 

 1. clone and install npm packages 

```
	git clone 
	cd laborit-test/
	npm install 
```
 2. environment config files...

  change database settings on file `/database/config/config.json`

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

-   `build`  - transpile TypeScript to ES6,
-   `build:watch`  - interactive watch mode to automatically transpile source files,
-   `test`  - run tests,
-   `test:watch`  - interactive watch mode to automatically re-run tests