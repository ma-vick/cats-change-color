const nameCat = document.querySelector('.name-cat');
const cats = document.querySelectorAll('.img-cat');

function modifyColors(cat) {
    document.body.style.background = cat.getAttribute('data-bgcolor');
    document.body.style.color = cat.getAttribute('data-txtcolor');
}

function printNameCat(cat) {
    nameCat.innerHTML = cat.getAttribute('data-namecat');
}

for (let i = 0; i < cats.length; i++) {                 // percorre todos os elementos
    cats[i].addEventListener('click', function() {           // adiciona o eventlistener ao elemento da vez
        if (!this.classList.contains('selected')) {     // se o elemento atual NÃO contém a classe 'selected'
            for (var j = 0; j < cats.length; j++) {     // percorra os outros elementos
                cats[j].classList.remove('selected');   // remova a classe 'selected'
            }
            this.classList.add('selected');             // adicione a classe ao elemento clicado
            modifyColors(this);
            printNameCat(this);
        } else {
            this.classList.remove('selected');          // se o elemento contém a classe, remova
            modifyColors(cats[0]);
            printNameCat(cats[0]);
            cats[0].classList.add('selected');
        }
    });
}