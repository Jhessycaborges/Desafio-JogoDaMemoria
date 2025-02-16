const emojis = [
   "🤖",
   "🤖",
   "⚽",
   "⚽",
   "🎲",
   "🎲",
   "🎰",
   "🎰",
   "🎩",
   "🎩",
   "💵",
   "💵",
];

let openCards = []; // Array para armazenar carta aberta

let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
// emojis.sort(): O método .sort() ordena os elementos do array.
// Math.random() > 0.5 ? 2 : -1:
// Math.random() gera um número aleatório entre 0 e 1.
// Se for maior que 0.5, retorna 2, senão retorna -1.
// Isso faz com que os emojis sejam embaralhados de forma aleatória.


// loop para adicionar os emojis na página
for(let i = 0; i < emojis.length; i++) 
    // Um for loop que percorre cada índice do array emojis.
    /* Como emojis.length é 12, o loop executará 12 vezes.*/ { 
    let box = document.createElement("div"); //Criando um elemento <div> para cada emoji //Esse div representará uma carta no jogo.
    box.className = "item"; //Adicionando uma classe ao elemento // Adiciona a classe "item" ao div. //Isso permite que seja estilizado via CSS.
    box.innerHTML = shuffledEmojis[i]; // Adicionando o emoji embaralhado dentro do div //O .innerHTML é uma propriedade do JavaScript usada para definir ou obter o conteúdo HTML dentro de um elemento.
    box.onclick = handleClick; // Adicionando um evento de clique ao elemento //O .onclick é uma propriedade do JavaScript usada para definir um evento de clique.
    document.querySelector(".game").appendChild(box); //Adicionando cada carta ao jogo //Procura um elemento no HTML com a classe "game" //Adiciona a div (box) criada dentro desse elemento. //No final do loop, todos os emojis estarão na tela dentro da .game
}

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this); // Adicionando a carta aberta ao array openCards
    }

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }

}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    } 

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Parabéns, você venceu!");
    }
}