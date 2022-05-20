const menu_humburguer = document.getElementById('menu-humburguer');

const Cart = {
    empty: true,
    qt_products: 0,
    total: 0,
    cartDOM: {
        cart_icon: document.querySelector('#cart-icon svg path'),
        cart_item_count: document.getElementById('cart-item-count'),
        cart_content: document.querySelector('.cart-content'),
        qt_products: document.querySelector('#cart .filled span.qtd'),
        total: document.querySelector('#cart .filled span.total')  
    },

    updateCart() {
        Cart.qt_products > 0 ? Cart.empty = false : Cart.empty = true;
        if(!Cart.empty) {
            Cart.cartDOM.cart_content.classList.remove('empty');
            Cart.cartDOM.cart_icon.style.fill = '#000';
            Cart.cartDOM.cart_item_count.style.display = 'initial';
            Cart.cartDOM.cart_item_count.innerText = Cart.qt_products;
            Cart.cartDOM.qt_products.innerText = Cart.qt_products;
            Cart.cartDOM.total.innerText = Cart.total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        } else {
            Cart.cartDOM.cart_content.classList.add('empty');
            Cart.cartDOM.cart_icon.style.fill = '#69707D';
            Cart.cartDOM.cart_item_count.style.display = 'none';
        }
        document.querySelector('#product-content .quantity span').innerText = Cart.qt_products;
    },

    more() {
        Cart.qt_products++;
        Cart.total = Cart.qt_products * 125;
        document.querySelector('#product-content .quantity span').innerText = Cart.qt_products;
    },

    minus() {
        if(Cart.qt_products > 0) {
            Cart.qt_products--;
            Cart.total = Cart.qt_products * 125;
            document.querySelector('#product-content .quantity span').innerText = Cart.qt_products;
        }
    }
}

const carouselControl = {
    carousel: document.querySelector('.carousel-images'),
    slides: Number(document.querySelector('.carousel-images').getAttribute('slides')),
    current_slide: document.querySelector('.carousel-images').getAttribute('current-slide'),

    updateCarousel() {
        carouselControl.carousel.style.transform = `translateX(${
            (carouselControl.current_slide - 1) * document.querySelector('#products #product-image').clientWidth * -1
        }px)`;

        document.querySelectorAll('#product-thumbnails .thumb').forEach((thumb, index) => {
            if(index != carouselControl.current_slide - 1) {
                thumb.classList.remove('active');
            } else {
                thumb.classList.add('active');
            }
        });
    },

    nextImage() {
        if(carouselControl.current_slide < carouselControl.slides) {
            carouselControl.current_slide++;
            carouselControl.carousel.setAttribute('current-slide', carouselControl.current_slide);
            carouselControl.updateCarousel();
        }
    },

    previousImage() {
        if(carouselControl.current_slide > 1) {
            carouselControl.current_slide--;
            carouselControl.carousel.setAttribute('current-slide', carouselControl.current_slide);
            carouselControl.updateCarousel();
        }
    }
};

const ModalImageControl = {
    div_images: document.querySelector('.modal .images'),
    current_image: document.querySelector('.modal .images').getAttribute('current-image'),

    updateImage() {
        ModalImageControl.div_images.querySelector('div').style.transform = `translateX(${
            (ModalImageControl.current_image - 1) * document.querySelector('.modal-images').clientWidth * -1
        }px)`;

        document.querySelectorAll('.modal-thumbs .thumb').forEach((thumb, index) => {
            if(index != ModalImageControl.current_image - 1) {
                thumb.classList.remove('active');
            } else {
                thumb.classList.add('active');
            }
        });
    },

    nextImage() {
        if(ModalImageControl.current_image < 4) {
            ModalImageControl.current_image++;
            ModalImageControl.div_images.setAttribute('current-image', ModalImageControl.current_image);
            ModalImageControl.updateImage();
        }
    },

    previousImage() {
        if(ModalImageControl.current_image > 1) {
            ModalImageControl.current_image--;
            ModalImageControl.div_images.setAttribute('current-image', ModalImageControl.current_image);
            ModalImageControl.updateImage();
        }
    }
};
    