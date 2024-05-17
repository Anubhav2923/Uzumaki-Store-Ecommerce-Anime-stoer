import { updateNavbarCartValue } from "./updateNavbarCartValue";

export const getCartProductsFromLS = () => {

    let cartProducts = localStorage.getItem("cartProductLS");

    if( !cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);

    updateNavbarCartValue(cartProducts);

    return cartProducts;
}