document.title = 'QUICKEAT'

const ulEl = document.querySelectorAll('#ulEl');

ulEl.forEach((aHover) => {
    aHover.addEventListener('mouseover', () => {
        aHover.style.color = 'orange'
        aHover.style.transition = '0.3s'
    })
    aHover.addEventListener('mouseout', () => {
        aHover.style.color = ''
        aHover.style.transition = '0.3s'
    })
})
 
const orderBtn = document.querySelectorAll('#btn');

const cartItems = [];

orderBtn.forEach((orderEl) => {
    orderEl.addEventListener('click', () => {
        const orderNow = orderEl.parentElement
        let order = {
            image: orderNow.querySelector('img').src,
            name: orderNow.querySelector('#name').innerHTML,
            price: orderNow.querySelector('#price').innerHTML,
            quantity: 1,
            id: Math.floor(Date.now() + Math.random())

        }
        console.log(cartItems);
        
        addItemTocart(order);
    })
})
//replace(/[₦,]/g, ''),

function addItemTocart(item) {
    const cartItem = JSON.parse(localStorage.getItem("cart-items")) || [];
    cartItem.unshift(item)

    localStorage.setItem("cart-items", JSON.stringify(cartItem))
    
}
