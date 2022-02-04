import { baseUrl, createUser, getWordById, getWords, signIn } from './API';
import { AuthParam, Tokens, Word } from './Interface';
import { setTokens } from './helpers';

const testPageParam = {
  page: '0',
  group: '2',
  wordId: '5e9f5ee35eb9e72bc21af961',
  user: {
    name: 'alex',
    email: 'justifyContent@gmail.com',
    password: 'ghjuhfvvf12345',
  },
  userId: '61fd268bcd9ffb00160592cd',
  logInParam: {
    email: 'justifyContent@gmail.com',
    password: 'ghjuhfvvf12345',
  },
  logInUncorrect: {
    email: 'justifyContent@gmail.com',
    password: 'ghjuhfvvf1345',
  },
};

export const drawWords = (container: HTMLElement): void => {
  const drawWord = (word: Word): void => {
    const wordCard = document.createElement('div');
    wordCard.classList.add('textbook-card');
    wordCard.classList.add('card-item');
    wordCard.innerHTML = `
      <div>
        <span>${word.word}</span>
        <span>${word.transcription}</span>
      </div>
      <div class="card-item__image">
        <img src="${baseUrl}${word.image}" alt="words-image">
      </div>
      <div>${word.wordTranslate}</div>
      <div>${word.textExample}</div>
      <div>${word.textExampleTranslate}</div>
      <div>${word.textMeaning}</div>
      <div>${word.textMeaningTranslate}</div>
    `;

    container.appendChild(wordCard);
  };

  getWords(testPageParam.page, testPageParam.group).then((response: Array<Word>) => {
    response.forEach((word: Word) => {
      drawWord(word);
    });
  });
};

signIn(testPageParam.logInParam).then((response: Response) => {
  if (response.ok) {
    response.json().then((response: AuthParam) => {
      const tokens: Tokens = {
        token: response.token,
        refreshToken: response.refreshToken,
      };
      setTokens(tokens);
    });
  } else {
    throw new Error('Invalid email or password');
  }
});

//USERS
export const;
