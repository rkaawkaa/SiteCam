const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const linkedin = document.querySelector('.linkedin');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position> 250) {
        header.style.backgroundColor = "#8693ab";
    } else {
        header.style.backgroundColor = "transparent";
    }
})


menu_item.forEach(item=> {
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
         mobile_menu.classList.toggle('active');
    })
})

linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/camille-tr%C3%A9ton-96356b123/');


})