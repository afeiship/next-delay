# next-delay
> Delay for next.

## installation
```bash
npm install -S @feizheng/next-delay
```

## usage
```js
import '@feizheng/next-delay';

//DOCS here!
```

## resources
- https://stackoverflow.com/questions/38956121/how-to-add-delay-to-promise-inside-then


```js
function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}
```
