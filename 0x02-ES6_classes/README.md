# ES6 Classes - ECMASCRIPT;

> INFO:  
>> This project explores the use of ES6 classes in JavaScript, focusing on object-oriented programming principles, static methods, class inheritance, and metaprogramming with symbols. Designed to enhance understanding and demo knowledge of these core JavaScript concepts.


## Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration Files](#appendix-configuration-files)
- [Usage](#usage)


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 12.11.x
- npm (Node Package Manager)


## Getting Started

```npm install```

## Project Structure

```
0x02-ES6_classes/
  ├── .eslintrc.js
  ├── babel.config.js
  ├── package.json
  ├── README.md - docs
  ├── ES6 JS Class files *
  ....
  └── misc
```


## Usage

```bash
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
```

---
## APPENDIX: Configuration Files
- `.eslintrc.js`: ESLint configuration file for linting rules.
- `babel.config.js`: Babel configuration for transpilation.
- `package.json`: Project configuration and dependencies.
