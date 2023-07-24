//--------------INICIO--------------
//--------------LIGHT MODE--------------
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
const linkTopo = document.querySelector('#link-topo');

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
    if(window.pageYOffset >= 500)  {
      linkTopo.style.display = "block";
    }
    else  {
      linkTopo.style.display = "none";
    }
}

//--------------ESCRITA DINÂMICA - H2 -> APRESENTAÇÃO--------------
const digitarH2 = document.querySelector('#digitando');

function digitacaoLetras(elemento) {
  const tituloH2 = elemento.innerHTML.split('');

  elemento.innerHTML = '';
  tituloH2.forEach((letra, i) => {
    setTimeout(() => {
        elemento.innerHTML += letra;
        elemento.style.color = "#61DAFB";
    }, 75 * i);
  });
}

digitacaoLetras(digitarH2);

//--------------Responsividade---------------
const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .nav-primaria')

ativaMenu.addEventListener('click', () =>  {
  ativaMenu.classList.toggle('fa-x')
  navMenu.classList.toggle('ativado')
})


//--------------SOBRE---------------
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


//-------------HABILIDADES----------------
var swiper = new Swiper(".swiper", {
  resizeObserver: true,
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

//---------ver mais...ver menos---------
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


//---------PROJETOS---------
const projetos = document.querySelectorAll('.projeto');

projetos.forEach((projeto) => {
  projeto.addEventListener('mouseover', () => {
    const paragrafos = projeto.querySelectorAll('p');
    paragrafos.forEach((paragrafo) => {
      if (paragrafo.classList.contains('backend')) {
        paragrafo.style.opacity = '1';
      } else if (paragrafo.classList.contains('techs')) {
        paragrafo.style.opacity = '1';
      }
    });
  });

  projeto.addEventListener('mouseout', () => {
    const paragrafos = projeto.querySelectorAll('p');
    paragrafos.forEach((paragrafo) => {
      paragrafo.style.opacity = '0';
    });
  });
});


//Selecionar projeto específico:
const botaoGeral = document.querySelectorAll(".modelos-projeto ul li")
//Função que remove ou adiciona a classe ativo nos botões:
function removerClick(index)  {
  botaoGeral.forEach((item) =>  {
    item.classList.remove('ativo')
  })
  botaoGeral[index].classList.add('ativo')
}

botaoGeral.forEach((event, index) =>  {
  event.addEventListener("click", () =>  {
    removerClick(index)
  })
})

const todosProjetos = document.querySelectorAll('.armazenamento-projetos ul li')
const projetosWebsite = document.querySelectorAll('.website')
const projetosDesign = document.querySelectorAll('.design')
const outrosProjetos = document.querySelectorAll('.outros')
const todos = document.getElementById('todos')
const websites = document.getElementById('website')
const design = document.getElementById('design')
const outros = document.getElementById('outros')
const mostrar = document.getElementById('mostrar')
let exibirMais = false;

todos.addEventListener("click", () =>  {
  for(let i=0; i<todosProjetos.length; i++)  {
    todosProjetos[i].style.display = "block"
  }
})

websites.addEventListener("click", () =>  {
  for(let i=0; i<projetosWebsite.length; i++)  {
    projetosWebsite[i].style.display = "block"
  }

  for(let i=0; i<todosProjetos.length; i++)  {
    if(todosProjetos[i].classList.contains('design') || todosProjetos[i].classList.contains('outros'))  {
      todosProjetos[i].style.display = "none"
    }
  }

  // Verifica se há itens ocultos e atualiza o botão "Mostrar mais"
  if (exibirMais && projetosWebsite.length > 6) {
    mostrar.textContent = 'Mostrar menos';
  } else {
    mostrar.textContent = 'Mostrar mais';
  }
})


design.addEventListener("click", () =>  {
  for(let i=0; i<projetosDesign.length; i++)  {
    projetosDesign[i].style.display = "block"
  }

  for(let i=0; i<todosProjetos.length; i++)  {
    if(todosProjetos[i].classList.contains('design'))  {
      todosProjetos[i].style.display = "block"
    }
    if(todosProjetos[i].classList.contains('website') || todosProjetos[i].classList.contains('outros'))  {
      todosProjetos[i].style.display = "none"
    }
  }

  // Verifica se há itens ocultos e atualiza o botão "Mostrar mais"
  if (exibirMais && projetosDesign.length > 6) {
    mostrar.textContent = 'Mostrar menos';
  } else {
    mostrar.textContent = 'Mostrar mais';
  }
})

outros.addEventListener("click", () =>  {
  for(let i=0; i<todosProjetos.length; i++)  {
    if(todosProjetos[i].classList.contains('outros'))  {
      todosProjetos[i].style.display = "block"
    }
    if(todosProjetos[i].classList.contains('website') || todosProjetos[i].classList.contains('design'))  {
      todosProjetos[i].style.display = "none"
    }
  }

  // Verifica se há itens ocultos e atualiza o botão "Mostrar mais"
  if (exibirMais && outrosProjetos.length > 6) {
    mostrar.textContent = 'Mostrar menos';
  } else {
    mostrar.textContent = 'Mostrar mais';
  }
})

for(let i=0; i<todosProjetos.length; i++)  {
  if(i >= 8)  {
    todosProjetos[i].style.display = "none"
  }
}

function mostrarMenos() {
  for (let i = todosProjetos.length - 6; i < todosProjetos.length; i++) {
    todosProjetos[i].style.display = 'none';
  }
}

function mostrarMais() {
  for (let i = todosProjetos.length - 6; i < todosProjetos.length; i++) {
    todosProjetos[i].style.display = 'block';
  }
}

mostrar.addEventListener('click', function () {
  if (exibirMais) {
    mostrarMenos();
    mostrar.textContent = 'Mostrar mais';
    exibirMais = false;
  } else {
    if (todos.classList.contains('ativo')) {
      mostrarMais();
    } else if (projetosWebsite[0].style.display === 'block') {
      for (let i = 0; i < projetosWebsite.length; i++) {
        projetosWebsite[i].style.display = 'block';
      }
    } else if (projetosDesign[0].style.display === 'block') {
      for (let i = 0; i < projetosDesign.length; i++) {
        projetosDesign[i].style.display = 'block';
      }
    } else if (outrosProjetos[0].style.display === 'block') {
      for (let i = 0; i < outrosProjetos.length; i++) {
        outrosProjetos[i].style.display = 'block';
      }
    }
    mostrar.textContent = 'Mostrar menos';
    exibirMais = true;
  }
});