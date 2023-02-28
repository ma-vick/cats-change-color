const nameCat = document.querySelector('.name-cat');
const cats = document.querySelectorAll('.img-cat');

function modifyColors(cat) {
    document.body.style.background = cat.getAttribute('data-bgcolor');
    document.body.style.color = cat.getAttribute('data-txtcolor');
}

function printNameCat(cat) {
    nameCat.innerHTML = cat.getAttribute('data-namecat');
}

for (let i = 0; i < cats.length; i++) {
    cats[i].addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            for (let j = 0; j < cats.length; j++) {
                cats[j].classList.remove('selected');
            }
            this.classList.add('selected');
            modifyColors(this);
            printNameCat(this);
        } else {
            this.classList.remove('selected');
            modifyColors(cats[0]);
            printNameCat(cats[0]);
            cats[0].classList.add('selected');
        }
    });
}