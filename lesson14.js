let dots = document.querySelectorAll('.dot');
for(let i=0; i<dots.length; i++){
    dots[i].addEventListener('click' , function(){
        for(let k=0; k<dots.length; k++){
            dots[k].classList.remove('active-dot');
        }
        this.classList.add('active-dot')
    })
}




let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n){
    let currentSlide = document.querySelectorAll('.current-slide');
    let welcomeSlide = document.querySelectorAll('.welcome-img');
    let numberSlide = document.querySelector('.number-slide');
    if(n>welcomeSlide.length){slideIndex=1};
    if(n<1){slideIndex=5};
    for(let i=0; i<currentSlide.length; i++){
        currentSlide[i].classList.remove('active-square' );
    }
    for(let i=0 ; i<welcomeSlide.length ; i++){
        welcomeSlide[i].style.display = 'none';
    }
    welcomeSlide[slideIndex - 1].style.display = 'block';
    currentSlide[slideIndex - 1].classList.add('active-square');
    numberSlide.textContent = slideIndex;
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}





let video = document.querySelector('.video');
let iconPlay = document.querySelector('.icon-play');
let iconPause = document.querySelector('.icon-pause');
let play = document.querySelector('.group');

function videoPlay(){
    video.play();

    play.style.display = 'none';

    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
}

iconPause.addEventListener('click', function(){
    video.pause();
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
    play.style.display = 'block';
})

iconPlay.addEventListener('click', function(){
    video.play();
    iconPause.style.display = 'block';
    iconPlay.style.display = 'none';
    play.style.display = 'none';
})


let videoSrc = video.src
let videoSrc1 = document.querySelector('.video1').src;
let videoSrc2 = document.querySelector('.video2').src;
let videoSrc3 = document.querySelector('.video3').src;

let play1 = document.querySelector('.play1');
play1.addEventListener('click', function(){
    video.src = videoSrc1;
    video.play();
    play.style.display = 'none';
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
})

let play2 = document.querySelector('.play2');
play2.addEventListener('click', function(){
    video.src = videoSrc2;
    video.play();
    play.style.display = 'none';
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
})

let play3 = document.querySelector('.play3');
play3.addEventListener('click', function(){
    video.src = videoSrc3;
    video.play();
    play.style.display = 'none';
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
})

let total = document.querySelector('.total span');
let b1 = document.querySelector('.b1');
let s1 = document.querySelector('.s1');

let eb1 = document.querySelector('.eb1');
let es1 = document.querySelector('.es1');

let pb = document.querySelector('.price-basic b');
let ps = document.querySelector('.price-senior b');

let pbSpan = document.querySelector('.p-basic');
let psSpan = document.querySelector('.p-senior');
let totalPrice = document.querySelector('.total-price span')

function basicMinus(){
    b1.textContent = +b1.textContent - 1;
    total.textContent = +b1.textContent*20 + +s1.textContent*10
}

function basicPlus(){
    b1.textContent = +b1.textContent + 1;
    total.textContent = +b1.textContent*20 + +s1.textContent*10
}

function seniorMinus(){
    s1.textContent = +s1.textContent - 1;
    total.textContent = +b1.textContent*20 + +s1.textContent*10;
}

function seniorPlus(){
    s1.textContent = +s1.textContent + 1;
    total.textContent = +b1.textContent*20 + +s1.textContent*10;
}



let buy = document.querySelector('.buy');
let bookButton = document.querySelector('.book-button');
let clos = document.querySelector('.close');
let booking = document.querySelector('.booking-tickets');

let radios = document.querySelectorAll('input[type="radio"]')

buy.addEventListener('click', function(){
    booking.style.display = 'block';

    for (let radio of radios){
        if(radio.checked){
            document.querySelector('.type p').innerHTML = radio.nextElementSibling.textContent
        }
    }

    eb1.textContent = b1.textContent;
    es1.textContent = s1.textContent;

    pb.textContent = b1.textContent;
    ps.textContent = s1.textContent;

    pbSpan.textContent = b1.textContent*20;
    psSpan.textContent = s1.textContent*10;

    totalPrice.textContent = total.textContent

})



function ebMinus(){
    eb1.textContent = +eb1.textContent - 1
}

function ebPlus(){
    eb1.textContent = +eb1.textContent + 1
}


function esMinus(){
    es1.textContent = +es1.textContent - 1
}

function esPlus(){
    es1.textContent = +es1.textContent + 1
}

bookButton.addEventListener('click', function(){
    booking.style.display = 'none'
})

clos.addEventListener('click', function(){
    booking.style.display = 'none'
})


let opentype = document.querySelector('.opentype');
let closetype = document.querySelector('.closetype');
let typeActive = document.querySelector('.type-active');

function openType(){
    closetype.style.display = 'block';
    opentype.style.display = 'none';
    typeActive.style.display = 'block';
}
function closeType(){
    closetype.style.display = 'none';
    opentype.style.display = 'block';
    typeActive.style.display = 'none';
}





let progressFilled = document.querySelector('.progress-filled')
let videoRange = document.querySelector('.video-range input')
let ranges = document.querySelectorAll('.player_slider')
function handleRangeUpdate(){
    video[this.name] = this.value;
}

// ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));


// function handleProgress(){
//     let percent = (video.currentTime / video.duration) * 100 ;
//     progressFilled.style.flexBasis = `${percent}%`
// }

// video.addEventListener('timeupdate', handleProgress)