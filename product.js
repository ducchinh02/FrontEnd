const header_sticky = document.querySelector('.header-sticky');
const icon = document.querySelectorAll('.menuActive');
const backToTop = document.querySelector('.backToTop');
const sorting = document.querySelector('.sorting');
const select_sorting = document.querySelector('.select-sorting');
sorting.addEventListener("click",()=>{
    select_sorting.classList.toggle('active_sort')
})

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