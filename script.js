let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // in the below remove cartItem and searchform because when we click the navbar then it is only active and other 2 are remove
    cartItem.classList.remove('active');
    searchform.classList.remove('active');

}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');

}

let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
//Now we have to do that when we scroll the window then we have to remove navbar,cartItem,searchform these are have been let at the above
window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchform.classList.remove('active');

}