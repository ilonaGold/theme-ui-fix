const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");

function fix() {
  greeting.textContent = "🎅 Merry Christmas! ☃️";
  greeting.style.fontFamily = "'Mountains of Christmas', cursive";
  greeting.style.color = "white";
  btn.style.display = "none";
  container.style.backgroundImage = "url(images/christmas.jpg)";
  container.style.transition = "all 5s";
}

btn.addEventListener("click", fix);

function changeBg() {
  const today = new Date();
  if(today.getMonth() === 11 && today.getDate() === 31) {
    greeting.textContent = "";
    container.style.backgroundImage = "url(images/happy-new-year.jpg)";
  } 
}

btn.addEventListener("click", changeBg);