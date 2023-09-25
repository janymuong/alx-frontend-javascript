# ES6 Basics
> ECMAScript  
>> Fundamentals of ECMAScript 2015 (ES6) in JavaScript. ES6 introduced various features and enhancements to the JavaScript language, and this project covers some of the key concepts.


## Premise

Entails exploring essential `ES6` concepts, including `constants`, `variables`, `block-scoped variables`, `arrow functions`, `rest and spread parameters`, `string templating`, *object creation*, and iterators with `for-of loops`. The goal is to create JavaScript code that exemplifies these concepts.

## Config And Linters

- `package.json`: The project's configuration file for managing dependencies and scripts.

- `babel.config.js`: Configuration file for Babel, which allows you to use ES6 features in your code.

- `.eslintrc.js`: ESLint configuration file to maintain code quality and adhere to coding standards.

## Getting Started

- Ensure you have Node.js installed on your system.

- Install from a package.json file - run `npm install` in the project directory to install the necessary dependencies.

## Concepts Covered:

```bash
- Constants and Variables
- Block-Scoped Variables
- Arrow Functions
- Default Parameters
- Rest and Spread Parameters
- String Templating
- Object Creation and Properties
- Iterators and for-of Loops
```

## Running Scripts

```bash
node parh/to/javascript-file.js
```

---
### `appendix`:
> more configuration files info;


1. **package.json:**
   (based on content of this file in local)
   This file is used to manage project's dependencies and scripts. Here's what each script does:

   - `lint`: Runs ESLint to check your code for style and potential errors.
   - `check-lint`: Specifically checks JavaScript files (`[0-9]*.js`) using ESLint.
   - `dev`: Executes scripts using `babel-node`, allowing you to run JavaScript files with ES6 features.
   - `test`: Executes Jest for running unit tests.
   - `full-test`: Combines linting and Jest tests in a single command.

   The `devDependencies` section lists the development dependencies needed for linting (ESLint and related plugins) and testing (Jest).

2. **babel.config.js:**

   This file configures Babel, a JavaScript compiler that allows you to use the latest ECMAScript features. In this configuration, Babel is set up to use the `@babel/preset-env` preset with the target environment being the current Node.js version.

3. **.eslintrc.js:**

   This file configures ESLint, a tool for identifying and fixing code style issues and potential errors. Key configurations include:

   - Environment settings (`env`) specify that you're using ES6 and Jest for testing.
   - Extends the Airbnb base style guide for code consistency.
   - Disables certain rules such as 'no-console' and 'no-shadow.'
   - Overrides for specific files (excluding `babel.config.js` from linting).
   - Lint files in CLI like this: `npx eslint filename.js`, and fix like this: `npx eslint --fix filename.js`

4. **npm install:**

   Run `npm install` from the terminal in a project directory to install all the necessary dependencies listed in the `package.json` file. This command ensures that ESLint, Jest, Babel, and other required packages are installed.
