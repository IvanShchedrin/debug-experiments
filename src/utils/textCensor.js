import badWordsRegexp from 'badwords/regexp';

export const clearText = (text) => (
  text.replace(badWordsRegexp, (word) => {
    '*'.repeat(word.length);
    let textChang = '*'.repeat(word.length);
    return(textChang);
  })
);
