//--------------LIGHT MODE//--------------
const moon = document.getElementById('sun');

moon.onclick = function()  {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode"))  {
    moon.src = "img/moon.png";
  }
  else  {
    moon.src = "img/sun.png";
  }
}

//--------------EFEITO DE SCROLL NO HEADER--------------
const header = document.querySelector('header');
const logo = document.querySelector('#logo');

window.addEventListener("scroll", diminuirHeader);

function diminuirHeader()  {
    if(window.pageYOffset > 100 && header.classList.contains("max"))  {
        header.classList.remove("max"); 
        header.classList.add("min"); 
        logo.style.fontSize = "25px";
    }
    else if(window.pageYOffset == 0 && header.classList.contains("min"))  {
        header.classList.add("max"); 
        header.classList.remove("min"); 
        logo.style.fontSize = "32px"; 
    }
}

//--------------ESCRITA DINÂMICA - H2 -> APRESENTAÇÃO--------------
const digitarH2 = document.querySelector('#digitando');

function digitacaoLetras(elemento) {
  const tituloH2 = elemento.innerHTML.split('');

  elemento.innerHTML = '';
  tituloH2.forEach((letra, i) => {
    setTimeout(() => {
      if (letra === '|') {
        elemento.innerHTML += '<span style="color: white;">|</span>';
      } else {
        elemento.innerHTML += letra;
        elemento.style.color = "#61DAFB";
      }
    }, 75 * i);
  });
}

digitacaoLetras(digitarH2);

//--------------MODAL POPUP--------------
const formacao = document.querySelector("#formacao");
const modal = document.querySelector("dialog#dialog");
const fecharModal = document.querySelector("#dialog span");

formacao.onclick = function()  {
  modal.showModal();
}

fecharModal.onclick = function()  {
  modal.close();
}

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

const wrapper = document.querySelectorAll('.wrapper');
const tech_name = document.querySelectorAll('.image span');

for (let i = 0; i < wrapper.length; i++) {
  if (wrapper[i] && tech_name[i]) {
    wrapper[i].addEventListener("mouseover", function() {
      tech_name[i].style.display = "none";
    });
    wrapper[i].addEventListener("mouseout", function() {
      tech_name[i].style.display = "block";
    });
  }
}

//---------HABILIDADES ver mais...ver menos---------

let verMais = document.querySelector("#mais");
let verMenos = document.querySelector("#menos");
let texto = document.querySelector("#texto");

texto.style.display = "none";

verMais.addEventListener("click", function()  {
        texto.style.display = "block";
        verMais.style.display = "none";
});

verMenos.addEventListener("click", function()  {
    texto.style.display = "none";
    verMais.style.display = "inline";
});







