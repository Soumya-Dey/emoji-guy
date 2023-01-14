<br>
<h1 align="center">🤷‍♂️ Emoji Guy</h1>

<div align="center">

A NPM package to parse the emoji shortcodes for showing in HTML. Currently supporting the SLACK emojis, more on the way.

[![license](https://img.shields.io/npm/l/emojiguy)](https://github.com/Soumya-Dey/emoji-guy/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/emojiguy/latest)](https://www.npmjs.com/package/emojiguy)
[![npm downloads](https://img.shields.io/npm/dm/emojiguy)](https://www.npmjs.com/package/emojiguy)
[![github stars](https://badgen.net/github/stars/Soumya-Dey/emoji-guy)](https://github.com/Soumya-Dey/emoji-guy)
[![minified size](https://img.shields.io/bundlephobia/min/emojiguy)](https://bundlephobia.com/package/emojiguy)
[![last commit](https://img.shields.io/github/last-commit/Soumya-Dey/emoji-guy)](https://github.com/Soumya-Dey/emoji-guy)
[![closed issues](https://badgen.net/github/closed-issues/Soumya-Dey/emoji-guy)](https://github.com/Soumya-Dey/emoji-guy/issues)
[![open issues](https://badgen.net/github/open-issues/Soumya-Dey/emoji-guy)](https://github.com/Soumya-Dey/emoji-guy/issues)

</div>

## Installing

- Using npm:

```bash
$ npm i emojiguy
```

- Using yarn:

```bash
$ yarn add emojiguy
```

## Usage

1. Import the package

```js
const emojiguy = require('emojiguy');
```

2. Parse a text for HTML

```js
const text = 'Hello everyone :man-raising-hand:. Good morning! :smile:';

const parsedText = emojiguy.parseForSlack(text, { separateTag: true });

console.log(parsedText);
// Hello everyone <span>&#x1F64B</span>. Good morning! <span>&#x1F604</span>
```

## Methods

#### parseForSlack(text[, {separteTag}])

> For replacing the emoji short codes with HTML codes. The returned text can be directly used in HTML document.

- separteTag = false

```js
const text = 'Hello everyone :man-raising-hand:. Good morning! :smile:';

let parsedText = emojiguy.parseForSlack(text);

console.log(parsedText);
// Hello everyone &#x1F64B. Good morning! &#x1F604
```

- separteTag = true

```js
const text = 'Hello everyone :man-raising-hand:. Good morning! :smile:';

let parsedText = emojiguy.parseForSlack(text, { separateTag: true });

console.log(parsedText);
// Hello everyone <span>&#x1F64B</span>. Good morning! <span>&#x1F604</span>
```

#### getHtmlCode(shortcode)

> For getting the html code for a specific emoji short code.

```js
console.log(emojiguy.getHtmlCode('low_battery'));
// &#x1FAAB

console.log(emojiguy.getHtmlCode(':low_battery:'));
// &#x1FAAB
```

## Issues

If you encounter any issue while using the package please report it here 👉 [Soumya-Dey/emoji-guy/Issues](https://github.com/Soumya-Dey/emoji-guy/issues)

## License

[MIT License](https://github.com/Soumya-Dey/emoji-guy/blob/main/LICENSE)
