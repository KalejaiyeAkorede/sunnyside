const MenuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.header__nav');

//Function to open nav links
function openNavLinks() {
    if (navLinks.style.transform === 'scaleY(1)'){
    navLinks.style.transform ='scaleY(0)';
    } else {
        navLinks.style.transform = 'scaleY(1)';
    }
}

//run function when menu btn is clicked
MenuBtn.addEventListener('click', openNavLinks)