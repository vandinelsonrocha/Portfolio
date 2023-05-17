const header = document.querySelector('header');
const logo = document.querySelector('#logo');

/*Criar uma função de scroll que executará algumas coisas qd fizer scroll*/
window.addEventListener("scroll", diminuirHeader);

function diminuirHeader()  {
    //Se for feito um scroll maior que 100px e o header tiver a classe max
    if(window.pageYOffset > 100 && header.classList.contains("max"))  {
        header.classList.remove("max"); //remove-se a classe max
        header.classList.add("min"); //coloca a classe min com seus estilos definidos no css
        logo.style.fontsize = "300px"; //e a imagem diminui a largura
    }
    //Se não tiver feito nenhum scroll e o header estiver com a classe min 
    else if(window.pageYOffset == 0 && header.classList.contains("min"))  {
        header.classList.add("max"); //tem de voltar a classe max
        header.classList.remove("min"); //remover a classe min
        logo.style.fontsize = "300px"; //e a imagem retorna para a largura que está definida no css
    }
}