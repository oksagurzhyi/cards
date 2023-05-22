import { nanoid } from 'nanoid';

export function createCard(event) {
  const data = {
    id: nanoid(),
  };

  new FormData(event.currentTarget).forEach((value, name) => {
    data[name] = value;
  });
  return data;
}
