const gap = 9;
const listItems = document.querySelectorAll('.card__colour');

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


listItems.forEach(item => {
    item.addEventListener('click', () => {
        listItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});
// расстояние между словами
const rotateBetweenWords = (value) => {
    const words = document.querySelectorAll('.wheel__word')

    let deg = 263;

    for (let word of words) {
        word.style.transform = `rotate(${deg}deg)`
        deg += value
    }
}

// расстояние между буквами
const rotateBetweenLetters = (value) => {
    const letters = document.querySelectorAll('.wheel__letter')

    let deg = 0

    for (let letter of letters) {
        letter.style.transform = `rotate(${deg}deg)`
        deg += value
    }

}

rotateBetweenWords(3)
rotateBetweenLetters(9)