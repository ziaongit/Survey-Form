"use strict";

var goals = document.querySelector("#goals");
var count = document.querySelector(".goalcount");

count.textContent = goals.value;

goals.oninput = function () {
  count.textContent = goals.value;
};