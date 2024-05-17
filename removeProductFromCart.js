import { getCartProductsFromLS } from "./getCartProducts"
import { showToast } from "./showToast";
import { updateNavbarCartValue } from "./updateNavbarCartValue";

export const removeProductFromCart = (id) => {
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter((curProd)=> curProd.id !== id);

    //update the local storage after removing the item
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    // Remove the div from the page
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        showToast("delete", id);
    }

    updateNavbarCartValue(cartProducts);
}