// МОДАЛКА
var modal = document.querySelector('.modal-container');
var closeButton = document.querySelector('.close');
var modalTriggers = document.querySelectorAll('.open');

var openModal = function() {
    modal.classList.add('is-open')
   }
   var closeModal = function() {
    modal.classList.remove('is-open')
   }
   modalTriggers.forEach(function(item) { 
    item.addEventListener('click', openModal);
   })
   closeButton.addEventListener('click', closeModal)

// ПЛАВНЫЙ ЯКОРЬ
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

// кнопка наверх на JS
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

// СЛАЙДЕР

// обьявляем переменные с которыми мы будем работать
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// задаем начало нашего слайдера
let index = 0;
// две функции основные
//  тут функция принимает значение n, функция которая ставит активный слайд
const activeSlide = n => {
    // console.log(n);
    for (slide of slides) {
        slide.classList.remove('active');
    }
    // добавление к текущему слайду n класс
    slides[n].classList.add('active');
}

const activeDot = n => {
    // console.log(n);
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

// const prepareCurrentSlide = ind => {
//         activeSlide(ind);
//         activeDot(ind);
//     }
// обычная стрелочная функция, учесть логику что слайды кончаются то с последнего мы на первый переключаемся, слайдер цикличный
const nextSlide = () => {
        // проверка,отчет в массиве начинается с 0, обычный отчет в программировании
        if (index == slides.length - 1) {
            index = 0;
            //2 когда меняем индекс мы вызываем функцию, в качестве аргумента пишем index 
            activeSlide(index);
            activeDot(index);
        } else {
            // показываем программе перепрыгни через 1
            index++;
            // 2
            activeSlide(index);
            activeDot(index);
        }
    }
    // тут проверяем не первый ли это слайд
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {        
        activeSlide(indexDot);
        activeDot(indexDot);
    })
})


//  показываем какое событие мы будем прослушивать. первым аргументом
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// автоматическое переключение слайдов
setInterval(nextSlide, 2500);