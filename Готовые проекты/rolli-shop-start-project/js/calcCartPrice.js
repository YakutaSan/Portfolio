function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItem = cartWrapper.querySelectorAll('.cart-item');

    const totalPriceEl = document.querySelector('.total-price');

    let totalPrice = 0;

    cartItem.forEach(item => {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const calcPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        
        totalPrice += calcPrice;
    });

    totalPriceEl.innerHTML = totalPrice;
}