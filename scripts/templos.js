document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");

  // Cria spans dinamicamente
  const ano = new Date().getFullYear();
  const ultimaModificacao = new Date(document.lastModified).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  footer.innerHTML = `&copy; ${ano} - Seu Nome | Última atualização: ${ultimaModificacao}`;
});


