const emoji = require('./emoji.json');

const requiredInput = (param) => {
  throw new Error(`${param} is required.`);
};

const emojiRe = /\:([a-zA-Z0-9\-_\+]+)\:(?:\:([a-zA-Z0-9\-_\+]+)\:)?/g;

const parseText = (
  text = requiredInput('text'),
  { separateTag = false } = {}
) => {
  let newText = text;

  while ((match = emojiRe.exec(text))) {
    if (!emoji[match[0]]) continue;

    newText = newText.replace(
      match[0],
      separateTag ? `<span>${emoji[match[0]]}</span>` : emoji[match[0]]
    );
  }

  return newText;
};

const getEmojiList = () => emoji;

const getHtmlCode = (shortcode = requiredInput('shortcode')) =>
  shortcode.startsWith(':') && shortcode.endsWith(':')
    ? emoji[shortcode]
    : emoji[`:${shortcode}:`];

module.exports = { parseText, getEmojiList, getHtmlCode };
