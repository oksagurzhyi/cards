!function(){var t={taskList:document.querySelector("#task-list"),form:document.querySelector("#task-form")};function e(t){var e={};return new FormData(t.currentTarget).forEach((function(t,r){e[r]=t})),e}var r={saveCard:function(t){var e=JSON.parse(localStorage.getItem("tasks"))||[];e.push(t),localStorage.setItem("tasks",JSON.stringify(e))}};t.form.addEventListener("submit",(function(t){t.preventDefault();var a=e(t);r.saveCard(a)}))}();
//# sourceMappingURL=index.39f422ca.js.map