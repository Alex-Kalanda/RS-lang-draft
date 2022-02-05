import { baseUrl, createUser, deleteUser, getUserById, getWordById, getWords, putUser, signIn } from './API';
import { AuthParam, PostUser, ResponseUser, Tokens, Word } from './Interface';
import { setTokens } from './helpers';

const testPageParam = {
  page: '0',
  group: '2',
  wordId: '5e9f5ee35eb9e72bc21af961',
  user: {
    name: 'alex',
    email: 'Pisynator@gmail.com',
    password: 'ghjuhfvvf12345',
  },
  userId: localStorage.getItem('id') || '',
  userIdNonExistent: '11fd268bcd9ffb00160592cd',
  logInParam: {
    email: 'Pisynator@gmail.com',
    password: 'ghjuhfvvf12345',
  },
  logInUncorrect: {
    email: 'Pisynator@gmail.com',
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

getUserById(testPageParam.userId).then((resp: Response) => {
  const response: Promise<PostUser> = resp.json();
  response.then((resp: PostUser) => {
    console.log(resp);
  });
});
