!function(){var t={taskList:document.querySelector("#task-list"),form:document.querySelector("#task-form")},n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,n){return t+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")};function a(t){var a={id:n()};return new FormData(t.currentTarget).forEach((function(t,n){a[n]=t})),a}var e="tasks";function r(){return JSON.parse(localStorage.getItem(e))||[]}var s,i={saveCard:function(t){var n=r();n.push(t),localStorage.setItem(e,JSON.stringify(n))},getCards:r};function o(n){var a='<li class="task-list-item">\n          <button class="task-list-item-btn" data-id="'.concat(n.id,'">Удалить</button>\n          <h3>').concat(n.taskName,"</h3> <p>").concat(n.taskText,"</p>\n        </li>");t.taskList.insertAdjacentHTML("beforeend",a)}t.form.addEventListener("submit",(function(t){t.preventDefault();var n=a(t);o(n),i.saveCard(n)})),s=i.getCards().map((function(t){return'<li class="task-list-item">\n          <button class="task-list-item-btn" data-id="'.concat(t.id,'">Удалить</button>\n          <h3>').concat(t.taskName,"</h3> <p>").concat(t.taskText,"</p>\n        </li>")})).join(""),t.taskList.insertAdjacentHTML("beforeend",s)}();
//# sourceMappingURL=index.13e40eaa.js.map
