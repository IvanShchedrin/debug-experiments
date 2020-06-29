import badWordsRegexp from 'badwords/regexp';

export const clearText = (text) => (
  text.replace(badWordsRegexp, (word) => {
    return '*'.repeat(word.length);
  })
);
