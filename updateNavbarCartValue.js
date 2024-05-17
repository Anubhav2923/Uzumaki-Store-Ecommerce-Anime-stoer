
const cartValue = document.querySelector("#cartValue");

export const updateNavbarCartValue = (cartProducts)=> {
    return (cartValue.innerHTML = 
        ` <i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`
        );

};