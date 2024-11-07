document.addEventListener("DOMContentLoaded", () => {
    const addToBagButton = document.querySelector(".add-to-bag");
    const favouriteButton = document.querySelector(".favourite");
    const sizeOptions = document.querySelectorAll(".size-option");
    let selectedSize = "";

    sizeOptions.forEach(option => {
        option.addEventListener("click", () => {
            sizeOptions.forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");
            selectedSize = option.innerText;
        });
    });

    addToBagButton.addEventListener("click", (event) => {
        event.preventDefault();
        const productTitle = document.querySelector(".product-title").innerText;
        const productPrice = document.querySelector(".product-price").innerText;

        if (selectedSize) {
            alert(`Added "${productTitle}" (Size: ${selectedSize}) to the bag for ${productPrice}!`);
        } else {
            alert("Please select a size before adding to the bag.");
        }
    });

    favouriteButton.addEventListener("click", (event) => {
        event.preventDefault();
        const productTitle = document.querySelector(".product-title").innerText;

        if (selectedSize) {
            alert(`Added "${productTitle}" (Size: ${selectedSize}) to your favorites!`);
        } else {
            alert("Please select a size before adding to favorites.");
        }
    });
});
