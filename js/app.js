const menu = document.querySelector('#menu-icon')
const nav = document.querySelector('.nav__list')
const navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    nav.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-times')
    nav.classList.remove('active')
}
window.addEventListener('scroll', function(){
    navbar.classList.toggle('sticky', window.scrollY > 0)
})