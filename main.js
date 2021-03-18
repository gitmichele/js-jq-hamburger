function clickBurgerMenu(){

    $('.hamburger-menu').toggle();
};


function init(){

    $('.fa-bars, .fa-times').click(clickBurgerMenu);
};

init();