import badWordsRegexp from 'badwords/regexp';

export const clearText = (text) => (
  text.replace(badWordsRegexp, (word) => { /*переделал в стрелочную функцию*/
    return '*'.repeat(word.length);
  })
);