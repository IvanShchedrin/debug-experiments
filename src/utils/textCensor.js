import badWordsRegexp from 'badwords/regexp';

export const clearText = (text) => (
  text.replace(badWordsRegexp, (word) => {
    const censorship = '*'.repeat(word.length);
    return censorship;
  })
);
