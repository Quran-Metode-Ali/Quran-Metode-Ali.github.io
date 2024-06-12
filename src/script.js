// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger Animation
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Show More Products
const showProductsButton = document.querySelector('#show-products');
const products = [
    document.querySelector('#product-4'),
    document.querySelector('#product-5'),
    document.querySelector('#product-6')
];

showProductsButton.addEventListener('click', function() {
    products.forEach(product => {
        product.classList.remove('hidden');
        product.classList.add('flex');
    });
    showProductsButton.classList.add('hidden');
});
