document.title = 'QUICKEAT'

const navDrop = document.querySelector('.heading')

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
            price: orderNow.querySelector('#price').innerHTML.replace(/[,]/g, ''),
            quantity: 1,
            id: Math.floor(Date.now() + Math.random())

        }
        console.log(cartItems);
        
        addItemTocart(order);
    })
})


function addItemTocart(item) {
    const cartItem = JSON.parse(localStorage.getItem("cart-items")) || [];
    cartItem.unshift(item)

    localStorage.setItem("cart-items", JSON.stringify(cartItem))
    
}

let lastScrollTop = 0;
window.onscroll = function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navDrop.style.top = "-50px";
  } else {
    // Scrolling up
    navDrop.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
};
