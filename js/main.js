let counter = 0;
window.addEventListener('click', () => {
    let containerSlidePage = document.querySelector('.container');
    let firstSlide = containerSlidePage.querySelector('.slide-page');
    if(containerSlidePage.contains(firstSlide)) {
        firstSlide.remove()
    } 
});
window.addEventListener('click', () => {
    function count() {
        counter++;
        return counter;
    }
    count();
    let containerSlidePage = document.querySelector('.container');
    let firstSlide = containerSlidePage.querySelector('.slide-page');
    if (counter == 4) {
        counter = 0;
        let containerSlidePage = document.querySelector('.container');
        let allSlides = `<div class="slide-page">
        <img src="img/01.jpg" alt="">
        <figcaption>Image 01</figcaption>
    </div>
    <div class="slide-page">
        <img src="img/02.jpg" alt="">
        <figcaption>Image 02</figcaption>
    </div>
    <div class="slide-page">
        <img src="img/03.jpg" alt="">
        <figcaption>Image 03</figcaption>
    </div>
    <div class="slide-page">
        <img src="img/04.jpg" alt="">
        <figcaption>Image 04</figcaption>
    </div>`;
        containerSlidePage.insertAdjacentHTML('afterbegin', allSlides)
    }
});
