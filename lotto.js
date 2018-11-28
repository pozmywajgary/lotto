function setup() {
    const numbers = [];
    buildArray(numbers);
    render(numbers);
}

function buildArray(list) {
    const from = 1;
    const to = 80;
    const size = 6;

    for (let i = 0; i < size; i++) {
        const rand = Math.round(Math.random() * (from - to) + to);
        list.push(rand);
    }

}

function render(list) {
    const $conteiner = document.querySelector("#conteiner");
    
    list.forEach(function(item) { 
        const template = `<p>${item}</p>`;
        $conteiner.innerHTML += template;
    })
}

window.addEventListener('DOMContentLoaded', setup);