document.addEventListener('DOMContentLoaded', () => {
    renderitems();
})

function renderitems() {

    const cart_Item = getItems();
    console.log(cart_Item);

        const cart_Main = document.querySelector('.main');

        cart_Main.innerHTML = '';
        cart_Item.forEach((items) => {
            const cartMains = document.createElement('div')


            cartMains.classList.add('array');

            const innerHTML =  `<div class="first">
                    <img src="${items?.image}" alt="">
                    <p style="margin-left: 6rem;">${items?.name}</p>
                    <p style="color: orange; margin-left: 7rem;">${items?.price}</p>
                    <button id="subbtn">-</button>
                    <p >${items?.quantity}</p>   
                    <button id="btnn">+</button>
                    <button style="margin-left: 5rem; color: #999;" id="removebtn">X</button>
                </div>`
            cartMains.innerHTML = innerHTML
            const incrementbtn = cartMains.querySelector('#btnn')
            const decrementbtn = cartMains.querySelector('#subbtn')
            const removebtn = cartMains.querySelector('#removebtn')

            incrementbtn.addEventListener('click', () => {
                handleincrement(items)
            });
            decrementbtn.addEventListener('click', () => {
                handledecrement(items)
            });

            removebtn.addEventListener('click', () => {
                removeItem(items)
            });

            cart_Main.append(cartMains)

        })
}
//Increment
function handleincrement(item){
    const cart_Item = getItems();
    const newcartitems = cart_Item.map((cart_) => {
        if(cart_.id == item.id) {
            return {...cart_, quantity: cart_.quantity + 1};
        }else{
            return cart_
        }
    });
    localStorage.setItem('cart-items', JSON.stringify(newcartitems)) 
}

//Decrement

function handledecrement(item) {
    const cart_Item = getItems()
    const newcartItems = cart_Item.map(car_t => {
        if(car_t.id == item.id && car_t.quantity > 1) {
            return{...car_t, quantity: car_t.quantity - 1}
        }
        else{
            return cart_Item
        }
    })
    localStorage.setItem('cart-items', JSON.stringify(newcartItems))
}

//remove

function removeItem(item) {
    const cart_Item = getItems()
    const newCartItem = cart_Item.filter(cart => cart.id !== item.id)
    localStorage.setItem('cart-items', JSON.stringify(newCartItem))
}

function getItems(){
    const cart_Item = JSON.parse(localStorage.getItem('cart-items'));
    return cart_Item;
}