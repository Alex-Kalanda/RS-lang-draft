import { PostUser, ResponseUser, SignInParam, Word } from './Interface';

export const baseUrl = 'https://rs-lang-app-server.herokuapp.com/';

//TEXTBOOK
export const getWords = async (page: string, group: string): Promise<Array<Word>> => {
  const response: Response = await fetch(`${baseUrl}words?group=${group}&page=${page}`);
  return await response.json();
};
export const getWordById = async (id: string): Promise<Word> => {
  const response: Response = await fetch(`${baseUrl}words/${id}`);
  return await response.json();
};

//REGISTRATION NEW USER
export const createUser = async (user: PostUser): Promise<ResponseUser> => {
  const response: Response = await fetch(`${baseUrl}users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

//LOG IN - returns standard response for next status check
export const signIn = async (param: SignInParam): Promise<Response> => {
  return await fetch(`${baseUrl}signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
};
