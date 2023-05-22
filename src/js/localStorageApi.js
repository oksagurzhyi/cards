const LOCAL_STORAGE_KEY = 'tasks';
function saveCard(data) {
  let dataArray = getCards();
  dataArray.push(data);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataArray));
}
function getCards() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export default { saveCard, getCards };
