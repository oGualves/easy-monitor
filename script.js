// script.js - usado apenas no index.html

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".hero button");

  if (button) {
    button.addEventListener("click", () => {
      // Leva o usuário até a seção de planos
      document.querySelector(".pricing").scrollIntoView({ behavior: "smooth" });
    });
  }
});
