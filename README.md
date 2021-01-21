# @arminsarajlic/em-components

[![npm (scoped)](https://img.shields.io/npm/v/@arminsarajlic/em-components.svg)](https://www.npmjs.com/package/@arminsarajlic/em-components)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@arminsarajlic/em-components.svg)](https://www.npmjs.com/package/@arminsarajlic/em-components)

Various functions and configs shared between different EM projects

## Install

```
$ npm install @arminsarajlic/em-components
```

## Usage

```js
const unspace = require("@bamblehorse/tiny");

unspace("So much space!");
//=> "Somuchspace!"

unspace(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```