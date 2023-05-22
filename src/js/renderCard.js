import { refs } from './refs';

export function renderCard(data) {
  const markup = `<li class="task-list-item">
          <button class="task-list-item-btn" data-id="${data.id}">Удалить</button>
          <h3>${data.taskName}</h3> <p>${data.taskText}</p>
        </li>`;
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
