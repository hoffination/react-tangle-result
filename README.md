# react-tangle-result
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A [tangle.js](http://worrydream.com/Tangle/) result display component for accessible numeric output on React.js.

[Demo](https://hoffination.github.io/react-tangle-result/)

Changes are indicated in a number of ways
- Green and red indicate which way the value changed
- Growing and shrinking also help indicate
- A bottom line indicates shrinking values as well for increased visibility

## API
```js
<TangleResult value={numeric value} />
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
