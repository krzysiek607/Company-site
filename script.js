const carouselSlide = document.querySelector('.gallery-slides');
const carouselImages = document.querySelectorAll('.gallery-slides img');

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


rightButton.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

leftButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
const time = 150;
const descTime = 1.5;
const aboutUs = 'KIM JESTEŚMY?'.split('');
const aboutDescription = 'Express Logistics to działalność, która świadczy usługi dla KBC Logistics Ltd. Siedziba firmy znajduje się w Lublinie. Zajmujemy się prowadzeniem transportów tylko i wyłącznie po Wielkiej Brytanii, a naszym klientem jest firma siostra KBC Logistics. Posiadamy swoją bazę klientów z którymi współpracujemy na zasadach długoterminowych, a naszym zadaniem jest spełnienie potrzeb naszego klienta poprzez dotrzymywanie terminowości dostaw, a także zapewnienia elastyczności w terminach danych transportów (zarówno import jak i eksport) od klientów z całego świata w przewozach ciężarowych z towarami wszelkiego rodzaju. Działalność utworzona w październiku 2020 przez Artura Radzymińskiego, w tym momencie zatrudnia już 50 pracowników, w tym dyspozytorzy (transport pracownicy administracyjni a także kierownicy oraz head plannerzy.'.split('');
const introTitle = document.querySelector('#services-title');
const companyDescription = document.querySelector('#Express-description');
window.onload = (() => {
    for (let i = 0; i < aboutUs.length; i++) {
        ((ind) => {
            setTimeout(() => {
                introTitle.append(aboutUs[ind])
            }, time * ind);
        })(i);
    }
    for (let j = 0; j < aboutDescription.length; j++) {
        ((ind) => {
            setTimeout(() => {
                companyDescription.append(aboutDescription[ind])
            }, descTime * ind);
        })(j);
    }

});
