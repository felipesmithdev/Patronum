let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItens = thumbnail.querySelectorAll('.thumbnail .item');

thumbnail.appendChild(thumbnailItens[0]);

// function para o proximo botao
nextBtn.onclick = function() {
    moveSlider('next');
}

// function para o botao anterior
prevBtn.onclick = function() {
    moveSlider('prev');
}

function moveSlider(direction){
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItens = document.querySelectorAll('.thumbnail .item');
    
    if (direction === 'next' ){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItens[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItens[thumbnailItens.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function(){
        if (direction === 'next'){
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, {once: true}) // remove o event listener depois
}
