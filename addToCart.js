import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateNavbarCartValue } from "./updateNavbarCartValue";

getCartProductsFromLS();

export const addToCart = (event , id , stock) => {

    let arrLocalStorageProduct = getCartProductsFromLS();

    const currentProduElem = document.querySelector(`#card${id}`);
    let quantity = currentProduElem.querySelector(".productQuantity").innerText;
    let price = currentProduElem.querySelector('.productPrice').innerText;

    // console.log(quantity,price);

    price = price.replace("₹"," ");

    let existingProd = arrLocalStorageProduct.find((curProd)=> curProd.id === id);

    if(existingProd && quantity > 1 ) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
          });
          console.log(updatedCart);

          localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  
        
    }


    if(existingProd){
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({id , quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    // Update the Navbar Cart Value accoridng the items in it
    updateNavbarCartValue(arrLocalStorageProduct);
    
      //show toast when product added to the cart
      showToast("add", id)

}
