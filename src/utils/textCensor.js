import badWordsRegexp from 'badwords/regexp';

export const clearText = (text) => (
  /* Здесь мы не возвращали значение из функции коллбека */
  /* Могли дописать return или убрать скобки и оставить одно выражение, которое и будет возвращаться */
  text.replace(badWordsRegexp, (word) => '*'.repeat(word.length))
);
