# WebdriverIO + browserstack + github actions

## Introduction
This document details the automated testing of Android-NativeDemoApp-0.4.0.apk using WebDriverIO and BrowserStack. Five test cases are implemented to cover login, swipe actions, and drag-and-drop functionality. The tests run on real Samsung and Xiaomi Android devices via BrowserStack and are managed through GitHub Actions for CI/CD. Results are available on GitHub Pages for easy review.

## Requirements
- **Node.js**: Version 20.15.1 or higher
- **Dependencies**:
  - `@faker-js/faker`: Version 8.4.1 or higher
  - `@wdio/allure-reporter`: Version 9.0.4 or higher
  - `@wdio/browserstack-service`: Version 9.0.7 or higher
  - `@wdio/cli`: Version 8.1.0 or higher
  - `@wdio/local-runner`: Version 8.1.0 or higher
  - `@wdio/mocha-framework`: Version 8.1.0 or higher
  - `@wdio/spec-reporter`: Version 8.1.0 or higher
  - `allure-commandline`: Version 2.30.0 or higher
  - `dotenv`: Version 16.4.5 or higher

## Steps to Install
1. Install Nodejs:

    [Nodejs](https://nodejs.org/en/download/package-manager)

2. Clone the repository:
    ```sh
    https://github.com/haite4/wdio-browserstack
    ```
3. Navigate to the project directory:
    ```sh 
    cd wdio-browserstack
    ```

4. Install dependencies:
    ```sh
    npm install 
    ``` 

## Steps to Launch

1. **Run all tests on Xiaomi:**:
    ```sh
    npm run wdio:xiaomi
    ```
2. **Run all tests on Samsung:**
    ```sh
    npm run wdio:samsung
    ```
3. **Run drag test on Xiaomi:**
    ```sh
    npm run test:drag:xiaomi
    ```
4. **Run login test on Xiaomi:**
    ```sh
    npm run test:login:xiaomi
    ```
5. **Run swipe test on Xiaomi:**
    ```sh
    npm run test:swipe:xiaomi
    ```
6. **Run drag test on Samsung:**
    ```sh
    npm run test:drag:samsung
    ```
7. **Run login test on Samsung:**
    ```sh
    npm run test:login:samsung
    ```
8. **Run swipe test on Samsung:**
    ```sh
    npm run test:swipe:samsung
    ```


## Generate Allure Report: 

1. **After running your tests, generate the Allure report using:**
    ```sh
    npm run allure:generate
    ```

2. **View the Allure Report: To view the report locally:**
    ```sh
    npm run allure:serve
    ```


## GitHub Actions Integration

The GitHub Actions workflow is set up to automatically run the WebDriverIO test suites for the Android-NativeDemoApp-0.4.0.apk application. After the tests are executed on Samsung and Xiaomi devices, the results are published using Allure Reports. You can view the test results at the following link:

[View Test Results](https://haite4.github.io/wdio-browserstack/)

### Summary
- **Test Coverage:**: The project includes five test cases focusing on login, swipe actions, and drag-and-drop functionality.
- **GitHub Actions Workflow:**: The workflow runs WebDriverIO tests on real Samsung and Xiaomi devices through BrowserStack and generates comprehensive test reports.
- **Result Publication:**: Test results are automatically published to GitHub Pages, providing easy online access to detailed test outcomes and insights.