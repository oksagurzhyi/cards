const t={taskList:document.querySelector("#task-list"),form:document.querySelector("#task-form")};function e(t){const e={};return new FormData(t.currentTarget).forEach(((t,s)=>{e[s]=t})),e}var s={saveCard:function(t){let e=JSON.parse(localStorage.getItem("tasks"))||[];e.push(t),localStorage.setItem("tasks",JSON.stringify(e))},getCards:function(){return JSON.parse(localStorage.getItem("tasks"))}};t.form.addEventListener("submit",(function(t){t.preventDefault();const a=e(t);s.saveCard(a)})),function(){const e=s.getCards().map((t=>`<li class="task-list-item">\n          <button class="task-list-item-btn">Удалить</button>\n          <h3>${t.taskName}</h3> <p>${t.taskText}</p>\n        </li>`)).join("");t.taskList.insertAdjacentHTML("beforeend",e)}();
//# sourceMappingURL=index.d80cf00f.js.map
