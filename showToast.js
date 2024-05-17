export const showToast = (operation, id) => {
    const toast = document.querySelector("div");
    toast.classList.add("toast");

    // set the text content of the toast based on the operation
    if(operation === "add") {
        toast.textContent = `Product with ID ${id} has been added `;
    }
    else {
        toast.textContent = ` Product with ID ${id} has been deleted`;
    }

    document.body.appendChild(toast);

    //Automatically remove the toast ofter a few second
    setTimeout(() => {
        toast.remove();
    }, 2000);
}