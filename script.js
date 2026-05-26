const themeBtn = document.getElementById("themeBtn");
const msgBtn = document.getElementById("msgBtn");
const toast = document.getElementById("toast");

let darkMode = true;

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  darkMode = !darkMode;

  if(darkMode){
    themeBtn.innerText = "Trocar Tema";
  } else {
    themeBtn.innerText = "Tema Escuro";
  }

});

msgBtn.addEventListener("click", () => {

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);

});
