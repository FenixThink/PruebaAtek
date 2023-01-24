const Token = localStorage.getItem("token");
const title = document.querySelector("#token");
title.innerText += ` ${Token}`;