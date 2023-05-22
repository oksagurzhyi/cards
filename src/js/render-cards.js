import localStorageApi from './localStorageApi';
import { refs } from './refs';

export function renderCards() {
  const cards = localStorageApi.getCards();
  const markKap = cards
    .map(e => {
      return `<li class="task-list-item">
          <button class="task-list-item-btn" data-id="${e.id}">Удалить</button>
          <h3>${e.taskName}</h3> <p>${e.taskText}</p>
        </li>`;
    })
    .join('');
  refs.taskList.insertAdjacentHTML('beforeend', markKap);
}
