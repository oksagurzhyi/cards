function saveCard(data) {
  let dataArray = JSON.parse(localStorage.getItem('tasks')) || [];
  dataArray.push(data);
  localStorage.setItem('tasks', JSON.stringify(dataArray));
}

export default { saveCard };
