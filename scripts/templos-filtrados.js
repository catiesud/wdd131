let d=new data();


import { templos } from "./templos-dados.js";

function criarCartao(templo) {
  const card = document.createElement("div");
  card.classList.add("templo-card");

  card.innerHTML = `
    <h2>${templo.nomeDoTemplo}</h2>
    <p><strong>Localização:</strong> ${templo.localizacao}</p>
    <p><strong>Consagração:</strong> ${templo.consagracao}</p>
    <p><strong>Área:</strong> ${templo.area} pés²</p>
    <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
  `;
  return card;
}

function exibirTemplos(lista) {
  const container = document.getElementById("templos-container");
  container.innerHTML = "";
  lista.forEach(t => container.appendChild(criarCartao(t)));
}

// Exibe todos inicialmente
exibirTemplos(templos);

// 🔹 Filtros do menu
document.getElementById("menu-antigos").addEventListener("click", () => {
  exibirTemplos(
    templos.filter(t => parseInt(t.consagracao.split(",")[0]) < 1900)
  );
});

document.getElementById("menu-novos").addEventListener("click", () => {
  exibirTemplos(
    templos.filter(t => parseInt(t.consagracao.split(",")[0]) > 2000)
  );
});

document.getElementById("menu-grandes").addEventListener("click", () => {
  exibirTemplos(
    templos.filter(t => t.area > 90000)
  );
});

document.getElementById("menu-pequenos").addEventListener("click", () => {
  exibirTemplos(
    templos.filter(t => t.area < 10000)
  );
});

document.getElementById("menu-home").addEventListener("click", () => {
  exibirTemplos(templos);
});

// 🔹 Footer dinâmico
document.getElementById("ano-direitos").textContent = new Date().getFullYear();
document.getElementById("ultima-modificacao").textContent = document.lastModified;



const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  {
     nomeDoTemplo: "São Paulo",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978,  30 de outubro",
    area: 59246,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"

  },

  {
      nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 116642,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },

  {
     nomeDoTemplo: "Recife",
    localizacao: "Recife,Brasil",
    consagracao: "200, 15 de dezembro",
    area: 25000,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-icon.jpg"
  }

];


