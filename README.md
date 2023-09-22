# Test framework readme

### Installation 
To install pacckages and playwright run command:
```
npm i
```

### Run tests:
Bu default tests run using two workers and headful mode. These settings are specified in playwright.config.js file.

Tests can be run using the scripts from package.json file:

In order to run all tests for specific browser run command:
```
npm run tests:chrome
```
OR
```
npm run tests:firefox
```
OR 
```
npm run tests:webkit
```

The tests can be marked with special tag and it is possible to run only tests for this tag. Example: 

```
npm run tests:smoke
```

In order to run all tests for all possible browsers (Chromium, Webkit, Firefox) run command: 
```
npx playwright test
```


### Run test reports:
In order to run html reports for finished test run, run command:
```
npx playwright show-report
```
