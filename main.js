
function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML  = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra; 
            }, 75 * i);
        });
}

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);

class MobileNavbar {
    constructor(mobileMenu, navegacaoPrimaria, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navegacaoPrimaria);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log();
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = "navLinkFade 0.5s ease forwars 0.3s");

        });
    }


    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }


    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navegacao-primaria",
    ".navegacao-primaria li a",
);
mobileNavbar.init();

function showLista(lista, botao = "all"){
    lista.forEach((item) => {
        item.classList.remove('ativo');
    });

    if (botao === 'design'){
        lista.forEach((item) => {
            if (item.id === 'design') {
                item.classList.add('ativo');
            }
        });
    } else if (botao === 'graphic'){
        lista.forEach((item) => {
            if (item.id === 'graphic') {
                item.classList.add('ativo');
            }
        });
    } else if (botao === 'website'){
        lista.forEach((item) => {
            if (item.id === 'website') {
                item.classList.add('ativo');
            }
        });
    } else if (botao === 'all'){
        lista.forEach((item) => {
            item.classList.add('ativo');
        });
    }
}

const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');

listaALL.forEach((item) => {
    item.classList.add('ativo');
});

function removeClick(index){
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((event, index) => {
    event.addEventListener('click', () => {
        removeClick(index);
        let currentButton = event;
        if (currentButton.classList.contains('all')){
            showLista(listaALL, "all");
        } else if (currentButton.classList.contains('design')){
            showLista(listaALL, "design");
        } else if (currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic");
        } else if (currentButton.classList.contains('website')){
            showLista(listaALL, "website");
        }
    });
});
