/* ================================================== Desktop ==================================================== */
const sliderContainer_desktop = document.querySelector('.slider-container_desktop');
const slideRight_desktop = document.querySelector('.right-slide_desktop');
const slideLeft_desktop = document.querySelector('.left-slide_desktop');
const upButton_desktop = document.querySelector('.up-button_desktop');
const downButton_desktop = document.querySelector('.down-button_desktop');
const slidesLength_desktop = slideRight_desktop.querySelectorAll('.slider-image_desktop').length;

let activeSlideIndex_desktop = 0;

slideLeft_desktop.style.top = `-${(slidesLength_desktop - 1) * 80}vh`;

upButton_desktop.addEventListener('click', () => changeSlide_desktop('up'));
downButton_desktop.addEventListener('click', () => changeSlide_desktop('down'));

const changeSlide_desktop = (direction) => {
    const sliderHeight_desktop = sliderContainer_desktop.clientHeight;
    if(direction === 'up') {
        activeSlideIndex_desktop++;
        if(activeSlideIndex_desktop > slidesLength_desktop - 1) {
            activeSlideIndex_desktop = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex_desktop--;
        if(activeSlideIndex_desktop < 0) {
            activeSlideIndex_desktop = slidesLength_desktop - 1;
        }
    }
    slideRight_desktop.style.transform = `translateY(-${activeSlideIndex_desktop * sliderHeight_desktop}px)`;
    slideLeft_desktop.style.transform = `translateY(${activeSlideIndex_desktop * sliderHeight_desktop}px)`;
}

/* ================================================ Table ======================================================*/
// const sliderContainer_table = document.querySelector('.slider-container_table');
// const slideRight_table = document.querySelector('.right-slide_table');
// const slideLeft_table = document.querySelector('.left-slide_table');
// const upButton_table = document.querySelector('.up-button_table');
// const downButton_table = document.querySelector('.down-button_table');
// const slidesLength_table = slideRight_table.querySelectorAll('.slider-image_table').length;
//
// let activeSlideIndex_table = 0;
//
// slideLeft_table.style.top = `-${(slidesLength_table - 1) * 50}vh`;
//
// upButton_table.addEventListener('click', () => changeSlide_table('up'));
// downButton_table.addEventListener('click', () => changeSlide_table('down'));
//
// const changeSlide_table = (direction) => {
//     const sliderHeight_table = sliderContainer_table.clientHeight;
//     if(direction === 'up') {
//         activeSlideIndex_table++;
//         if(activeSlideIndex_table > slidesLength_table - 1) {
//             activeSlideIndex_table = 0;
//         }
//     } else if (direction === 'down') {
//         activeSlideIndex_table--;
//         if(activeSlideIndex_table < 0) {
//             activeSlideIndex_table = slidesLength_table - 1;
//         }
//     }
//     slideRight_table.style.transform = `translateY(-${activeSlideIndex_table * sliderHeight_table}px)`;
//     slideLeft_table.style.transform = `translateY(${activeSlideIndex_table * sliderHeight_table}px)`;
// }
