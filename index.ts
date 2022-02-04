import './global.css';
import { drawWords } from './app/word-card';

const root = document.querySelector('#root') as HTMLDivElement;

root.innerHTML = `
  <div>Hello word!</div>
  <div id="word-box"></div>
`;
const box = root.querySelector('#word-box') as HTMLDivElement;
drawWords(box);

/*
*
*
*response after registration --> {
  "id": "61fd1b719731b500165019e7",
  "name": "Vasya",
  "email": "googleVasya@gmail.com"
}
*
*
*
* */
