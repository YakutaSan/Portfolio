

window.addEventListener('click', (event) => {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWraper = event.target.closest('.counter-wrapper');
        counter = counterWraper.querySelector('[data-counter]');
    };

    if (event.target.dataset.action === 'plus') {    
        counter.innerHTML = ++counter.innerHTML;
    }

    if (event.target.dataset.action === 'minus') {   
        if (+counter.innerHTML > 1) {
            counter.innerHTML = --counter.innerHTML;
        } else if (event.target.closest('.cart-wrapper') && +counter.innerHTML === 1) {
            event.target.closest('.cart-item').remove();

            toggleCartStatus();
            calcCartPrice();
        };
    };

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPrice();
    }


    
});
