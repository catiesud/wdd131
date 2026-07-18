document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const ano = new Date().getFullYear();
  const ultimaModificacao = new Date(document.lastModified).toLocaleString("pt-BR");
  
  footer.innerHTML = `&copy; ${ano} - Catiana Guillaume | Última atualização: ${ultimaModificacao}`;
});





