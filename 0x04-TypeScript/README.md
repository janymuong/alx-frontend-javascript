
# TypeScript

## INFO:  
> TypeScript fundamentals. Covers basic types, interfaces, classes, working with the DOM, generics, namespaces, ambient namespaces, and nominal typing in TypeScript.


## Basic Type Checking
TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like `string` and `number`, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.


### Types by Inference
TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.

```typescript
let helloWorld = "Hello, TypeScript!";
        
let helloWorld: string
```

By understanding how JavaScript works, TypeScript can build a type-system that accepts JavaScript code but has types. This offers a type-system without needing to add extra characters to make types explicit in your code. That’s how TypeScript knows that helloWorld is a string in the above example.

```typescript
let helloWorld: string = "Hello, TypeScript!";
console.log(helloWorld);

// try to assign a different type - This will result in a compilation error
// helloWorld = 73; // uncommenting this line will cause a type error

// define a function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
console.log(`5 + 3 = ${result}`);
```

### Structural Type System
One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

```typescript
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

The `point` variable is never declared to be a `Point` type. However, TypeScript compares the ***shape*** of `point` to the shape of `Point` in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object’s fields to match.


---
## Appendix

> Typescript - more `INFO`  
>> TypeScript is an open-source programming language developed and maintained by Microsoft. It is a statically typed superset of JavaScript that adds optional static typing and other features to the language. TypeScript is designed to improve the development experience for large-scale JavaScript applications by providing features such as type checking, interfaces, classes, and modules.  


1. **`Static Typing`**: TypeScript allows developers to specify types for variables, function parameters, and return values. This static type checking helps catch type-related errors during development, improving code quality and robustness.

2. **`Type Inference`**: TypeScript has a type inference system that can often deduce types based on how variables are used in the code. This reduces the need for explicit type annotations while still providing type safety.

3. **`Interfaces`**: TypeScript introduces the concept of interfaces, which define the structure of objects. Interfaces are used to specify the shape of objects and classes, facilitating code organization and ensuring consistency.

4. **`Classes`**: TypeScript supports object-oriented programming (OOP) with classes, inheritance, and access modifiers (e.g., public, private, protected). Classes make it easier to create reusable and maintainable code.

5. **`Modules`**: TypeScript provides a module system for organizing code into separate files and namespaces. This helps manage code organization and reduces the risk of naming conflicts.

6. **`Type Annotations`**: Developers can annotate variables and function signatures with types explicitly using syntax such as `: number`, `: string`, etc.

7. **`Generics`**: TypeScript supports generics, allowing developers to write reusable code that works with a variety of types. This is particularly useful when building data structures and algorithms.

8. **`Tooling`**: TypeScript has excellent tooling support, including code editors like Visual Studio Code, which provides features such as autocompletion, error checking, and integrated debugging.

9. **`Compatibility`**: TypeScript code can be transpiled into standard JavaScript code, making it compatible with existing JavaScript libraries and environments.
