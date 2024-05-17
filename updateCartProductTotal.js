import { getCartProductsFromLS } from "./getCartProducts"

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".productSubTotal");

    let productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductsFromLS();
    let initialValue = 0;

    let totalProductsPrice = localCartProducts.reduce(( accum, curElem)=> {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;

    }, initialValue);

    // console.log(totalProductsPrice);

    productSubTotal.textContent = totalProductsPrice;
    productFinalTotal.textContent = `₹ ${totalProductsPrice + 50}  `
}