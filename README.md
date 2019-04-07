# tiny-isplainobject

[![source](https://badgen.net/npm/v/@ngard/tiny-isplainobject)](https://www.npmjs.com/package/@ngard/tiny-isplainobject)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-isplainobject)](https://bundlephobia.com/result?p=@ngard/tiny-isplainobject)
[![build status](https://badgen.net/travis/NickGard/tiny-isplainobject)](https://travis-ci.org/NickGard/tiny-isplainobject)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal-weight utility equivalent to `lodash.isPlainObject`. For when every byte counts!

<hr/>

lodash.isplainobject [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.isplainobject)](https://bundlephobia.com/result?p=lodash.isplainobject)
<br/>
tiny-isplainobject [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-isplainobject)](https://bundlephobia.com/result?p=@ngard/tiny-isplainobject)

<hr/>

## Syntax

```js
isPlainObject(/* object */)
```

## Parameters

`object` - An object (or any value) to check

## Return

`true` if value is a plain object, that is, an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`. `false` otherwise.

## Example

```javascript
import { isPlainObject } from '@ngard/tiny-isplainobject';

isPlainObject({ a: 1 }); // true
isPlainObject(Object.create(null)); // true

isPlainObject(null); // false
isPlainObject([1,2,3]); // false
isPlainObject(new Set()); // false
```
