const CART_KEY = "digikala_cart";


export function getCart() {

    const cart = localStorage.getItem(CART_KEY);

    return cart ? JSON.parse(cart) : [];

}


export function saveCart(cart) {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}


export function addToCart(product) {

    const cart = getCart();


    const existingProduct = cart.find(
        (item) => item.id === product.id
    );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1,
        });

    }


    saveCart(cart);

    return cart;

}


export function removeFromCart(productId) {

    const cart = getCart().filter(
        (item) => item.id !== productId
    );


    saveCart(cart);

    return cart;

}


export function increaseQuantity(productId) {

    const cart = getCart();


    const product = cart.find(
        (item) => item.id === productId
    );


    if (product) {

        product.quantity += 1;

    }


    saveCart(cart);

    return cart;

}


export function decreaseQuantity(productId) {

    const cart = getCart();


    const product = cart.find(
        (item) => item.id === productId
    );


    if (!product) {

        return cart;

    }


    product.quantity -= 1;


    if (product.quantity <= 0) {

        return removeFromCart(productId);

    }


    saveCart(cart);

    return cart;

}


export function getCartCount() {

    const cart = getCart();


    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

}


export function getCartTotal() {

    const cart = getCart();


    return cart.reduce(
        (total, item) => {

            return total +
                item.price * item.quantity;

        },
        0
    );

}