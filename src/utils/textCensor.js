import badWordsRegexp from 'badwords/regexp';

export const clearText = (text) => (
  text.replace(badWordsRegexp, function(word) { /*добавил function и return*/
    return '*'.repeat(word.length);
  })
);
