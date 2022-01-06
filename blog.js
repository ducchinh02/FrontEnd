const header_sticky = document.querySelector('.header-sticky');
const icon = document.querySelectorAll('.menuActive');
const backToTop = document.querySelector('.backToTop');

const box = document.querySelectorAll('.box-margin');

box[3].style.top = `calc(${box[0].clientHeight}px + 20px)`;
box[4].style.top = `calc(${box[1].clientHeight}px + 20px)`;
box[5].style.top = `calc(${box[2].clientHeight}px + 20px)`;
box[6].style.top = `calc(${box[0].clientHeight}px + ${box[3].clientHeight}px + 40px)`;
box[7].style.top = `calc(${box[1].clientHeight}px + ${box[4].clientHeight}px + 40px)`;
box[8].style.top = `calc(${box[2].clientHeight}px + ${box[5].clientHeight}px + 40px)`;

backToTop.addEventListener("click",scroll);
function scroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        backToTop.classList.add('active_back');
    }
    else{backToTop.classList.remove('active_back');}
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        header_sticky.classList.add("active")
    } else {
        header_sticky.classList.remove("active")
    }   
}
icon.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('active-icon')
    })
})

