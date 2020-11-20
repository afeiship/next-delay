# next-delay
> Delay for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-delay
```

## usage
```js
import '@jswork/next-delay';
```

## solution
```js
function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}
```

## resources
- https://stackoverflow.com/questions/38956121/how-to-add-delay-to-promise-inside-then

## license
Code released under [the MIT license](https://github.com/afeiship/next-delay/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-delay
[version-url]: https://npmjs.org/package/@jswork/next-delay

[license-image]: https://img.shields.io/npm/l/@jswork/next-delay
[license-url]: https://github.com/afeiship/next-delay/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-delay
[size-url]: https://github.com/afeiship/next-delay/blob/master/dist/next-delay.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-delay
[download-url]: https://www.npmjs.com/package/@jswork/next-delay
