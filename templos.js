// Atualiza ano e última modificação
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("modificacao").textContent = document.lastModified;

// Menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    menuToggle.textContent = "☰";
  } else {
    menu.style.display = "flex";
    menuToggle.textContent = "✖";
  }
});
