# ES6 Promises
> ES6 `Promises` and `Asynchronous JavaScript`  
>> Working with ***ES6 Promises***, ***asynchronous programming*** as JavaScript concepts.  
>> It focuses on the use of Promises, `async/await`, `throw`, `try/catch`, etc.   


## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Configuration Files](#configuration-files)
- [Response Data Format](#response-data-format)
- [Appendix](#appendix)

## Info:
In this project, you will explore ES6 Promises and asynchronous JavaScript, gaining a deep understanding of the following concepts:

### Promises
- How and why to use Promises
- Working with `then`, `resolve`, and `catch` methods
- Utilizing the `every` method of the Promise object
- Error handling using `try/catch`

### Asynchronous Programming
- The `await` operator
- Creating and using async functions

## Objectives

    ```bash
    - The fundamentals of Promises, including their purpose and how to use them
    - How to use the `then`, `resolve`, and `catch` methods to handle Promises
    - Utilizing the `every` method of the Promise object for more complex operations
    - Error handling using `try/catch` in asynchronous code
    - Working with the `await` operator to manage asynchronous tasks
    - Creating and using async functions for more readable and manageable code
    ```


## Requirements

- Ubuntu 18.04 LTS
- Node.js 12.11.x
- Supported editors: vi/vim, Visual Studio Code
- TEST code using Jest (run `npm run test`)
- VERIFY Code quality against ESLint (run `npm run lint`)


## Setup

To set up your development environment, follow these steps:

1. Install Node.js 12.11.x:
   - Run the following commands:
     ```
     curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
     sudo bash nodesource_setup.sh
     sudo apt install nodejs -y
     ```

2. Verify your Node.js and npm versions:
   - Run the following commands:
     ```
     nodejs -v
     npm -v
     ```

3. Install required development dependencies (Jest, Babel, and ESLint) for your project:
   - Navigate to your project directory and run `npm install`.

4. You can configure code linting and testing tools with the provided configuration files.


## Configuration Files

This project comes with several configuration files:

- `package.json`: Contains project-specific scripts and dependencies for linting, testing, and running your code.
- `babel.config.js`: Configures Babel for compatibility with Node.js.
- `.eslintrc.js`: Configures ESLint to maintain code quality.


## Response Data Format

Two utility functions, `uploadPhoto` and `createUser`, return specific response formats:

### `uploadPhoto` Response Format

```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

### `createUser` Response Format

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

---
## `APPENDIX`
> Usage: `await`, `async`, and Promises in JavaScript.  

### 1. Using `await` and `async` for Asynchronous Operations

#### Example 1: Fetching Data with `await` and `async`

Suppose you want to fetch data from an API using `await` and `async`. Here's how you can do it:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

In this example, the `await` keyword is used to pause the execution of the function until the Promise returned by `fetch()` resolves.

#### Example 2: Creating an `async` Function

You can also create your own `async` functions to manage asynchronous tasks:

```javascript
async function performTasks() {
  const result1 = await task1();
  const result2 = await task2();
  console.log('Results:', result1, result2);
}

performTasks();
```

In this example, `task1()` and `task2()` are asynchronous functions that return Promises. The `await` keyword waits for these Promises to resolve.

### 2. Working with Promises

#### Example 3: Creating and Resolving Promises

```javascript
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function examplePromiseUsage() {
  console.log('Start');
  await delay(2000); // Wait for 2 seconds
  console.log('After 2 seconds');
}

examplePromiseUsage();
```

In this example, `delay()` returns a Promise that resolves after the specified delay. We use `await` to pause execution for 2 seconds.

#### Example 4: Chaining Promises

```javascript
function fetchUserData(userId) {
  return fetch(`https://api.example.com/user/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    });
}

function displayUserData(userId) {
  fetchUserData(userId)
    .then((user) => {
      console.log('User:', user);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

displayUserData(123);
```

In this example, we chain Promises together for fetching user data and handling errors.
