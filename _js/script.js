//--------------LIGHT MODE//--------------
const moon = document.getElementById('sun');

moon.onclick = function()  {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode"))  {
    moon.src = "_img/moon.png";
  }
  else  {
    moon.src = "_img/sun.png";
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


