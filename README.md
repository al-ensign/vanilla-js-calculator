# Custom Scientific Calculator

This is a vanilla JavaScript scientific calculator that provides various scientific calculations. 

## Tech Stack:
- JavaScript
- Webpack
- Jest
- ESLint
- Prettier

## Features

- Addition, subtraction, multiplication, and division
- Percentage, sign change, square, cube, x to the power of y, 10 to the power of x, 1 / x, square root, cube root, root to the power of y, and factorial functions
- Memory functions: MC, M+, M-, MR
- Clear and all-clear functionality
- Error handling for dividing by zero and invalid input
- Operation chaining: when the left operand is entered, the right operand and operation are stored, and when yuser clicks on the next operation or "=", the current operation is executed and the result is stored as the left operand

## Installation

Custom Scientific Calculator requires [Node.js](https://nodejs.org/) v18+ to run.
Application uses vanilla JavaScript and Webpack for fast developing.

To run the application in development mode, first install the dependencies using:
```sh
npm i
```

Once the dependencies are installed, you can start the webpack development server using:

```sh
npm run start
```

This will launch the application in your default browser and will watch for any changes you make to the source files.

To build the application for production, run:

```sh
npm run build:prod
```

This will create a dist folder containing the bundled JavaScript and HTML files for production.

To build the application for development, run:

```sh
npm run build:dev
```

This will create a dist folder containing the bundled JavaScript and HTML files for development.

To lint the code, run:

```sh
npm run lint
```

This will check the code for any linting issues based on the configuration in the .eslintrc file.

To format the code using Prettier, run:

```sh
npm run format
```

This will format all JavaScript, TypeScript, and JSON files in the project using the configuration in the .prettierrc file.

To run the tests for the calculator logic, use:

```sh
npm run test
```

This will run all the Jest tests to ensure that the calculator logic is working correctly.

To clean the Jest cache, run:

```sh
npm run clean-tests
```

This will clear the Jest cache and may be necessary if there are issues with running the tests.


## License

MIT
