menu_humburguer.addEventListener('click', () => {
    menu_humburguer.classList.toggle('active');
    document.querySelector('.menu-overlay').classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    document.body.classList.toggle('menu-active');
});

document.querySelector('button.previous').addEventListener('click', carouselControl.previousImage);

document.querySelector('button.next').addEventListener('click', carouselControl.nextImage);

window.addEventListener('resize', carouselControl.updateCarousel);

document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart').classList.toggle('active');
});

document.getElementById('product-image').addEventListener('click', () => {
    document.querySelector('.modal-overlay').classList.toggle('active');
});

document.querySelector('.modal .close-icon').addEventListener('click', () => {
    document.querySelector('.modal-overlay').classList.toggle('active');
});

document.querySelector('.modal-images .arrow-buttons .previous').addEventListener('click', ModalImageControl.previousImage);

document.querySelector('.modal-images .arrow-buttons .next').addEventListener('click', ModalImageControl.nextImage);

document.querySelectorAll('.modal-thumbs .thumb').forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        ModalImageControl.current_image = index + 1;
        ModalImageControl.div_images.setAttribute('current-image', ModalImageControl
        .current_image);
        ModalImageControl.updateImage();
    });
});

document.querySelectorAll('#product-thumbnails .thumb').forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        carouselControl.current_slide = index + 1;
        carouselControl.carousel.setAttribute('current-slide', carouselControl
        .current_image);
        carouselControl.updateCarousel();
    });
});

document.querySelector('#product-content .quantity button:first-child').addEventListener('click', Cart.minus);

document.querySelector('#product-content .quantity button:last-child').addEventListener('click', Cart.more);

document.querySelector('#product-content .add-cart').addEventListener('click', () => {
    Cart.updateCart();
    document.getElementById('cart').classList.add('active');
});

document.querySelector('.cart-content .filled button.delete').addEventListener('click', () => {
    Cart.qt_products = 0;
    Cart.updateCart();
});