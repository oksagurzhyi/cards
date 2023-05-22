export function createCard(event) {
  const data = {};
  new FormData(event.currentTarget).forEach((value, name) => {
    data[name] = value;
  });
  return data;
}
