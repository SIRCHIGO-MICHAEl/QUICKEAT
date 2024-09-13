let isloading = true;
const itemEl = document.querySelector('#items')

// const new_Item = {
//     title: 'laptop'
// }
const fetchData = async () => {
    // if(isloading){
    //     itemEl.innerHTML = 'loading...'};
    const itemEl = document.querySelector('#items')

    
        fetch('https://fakestoreapi.com/products/')
        .then((respousce) => respousce.json())
        .then((data) => {
            data.map((item) => {
                const itemsEl =  ` <div>
            <img src=${item.image} alt="">
            <p>${item.title}</p>
            <p class"price">${item.price}</p>
         </div>`;
         itemEl.innerHTML += itemsEl
         
            })
        })
        .catch((error) => console.log(error))
        .finally(() => isloading = false)
    }
    
// fetchData()


async function getDate() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json()
        console.log(data); 
    } catch(error) {
        console.log(error);
        
    }
}

getDate()
//{method: 'put', body: new_Item }

