# Next.js 15 ReferenceError Bug

This repository demonstrates a common error in Next.js 15 applications where a `ReferenceError` occurs due to an incorrectly exported default function component.

## Bug Description

The `About.js` component attempts to use a variable defined within the component, but a missing `export default` statement prevents it from being accessible.

## Bug Reproduction

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Navigate to `/about`.
6. Observe the runtime error.

## Bug Solution

Ensure that the default function component in `About.js` is correctly exported using `export default`. The corrected code is provided in `aboutSolution.js`