let count = 0;
//SELCTING NUMBER OF ITEMS
const addCart = document.getElementById("itemcount");
const incrementeEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

incrementeEl.addEventListener("click", () => {
  count += 1;
  addCart.innerText = count;
});

decrementEl.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    addCart.innerText = count;
  } else {
    addCart.innerText = 0;
  }
});

//#########SHOWNG ITEM TO THE CART
const show = document.getElementById("cartList");
const showCart = document.getElementById("showcart");
const itemsNumberEL = document.getElementById("itemNumber");
const addedToCart = document.getElementById("addItem");
const showItemNumber = document.getElementById("navCart");

console.log(show);
//SHOWING ITEMS ON THE CART
showCart.addEventListener("click", () => {
  console.log("you find me here");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
});
//ADDING ITEM TO THE CART
addedToCart.addEventListener("click", () => {
  //NUMBER OF ITEMS CARTED
  let numberOfItems = count;
  let cartedItem = "";
  if (count > 0) {
    cartedItem = `
                <div class="cartitems">
                    <span id="itemNumber">${numberOfItems}</span>
                </div>
                `;
    showItemNumber.innerHTML += cartedItem;

    addCart.innerText = count - numberOfItems;
  }

  //CONTENT OF THE CART
  let itemsOnCart = "";
  itemsOnCart = `<h3>Cart</h3>
      <div class="cartContent">
        <img src="images/image-product-1.jpg" alt="sneekers image" />
        <div class="cartText">
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 x ${count} <strong class="black">$${
    125 * count
  }</strong></p>
        </div>
        <img src="images/icon-delete.svg" onclick="deleteItemBtn()" alt="delete button" />
      </div>
      <a href="#" class="btn block"> Checkout </a>`;
  show.innerHTML = itemsOnCart;
});
const deleteItemBtn = () => {
  show.innerHTML = "";
  show.style.display = "none";
};

/* 
function renderNumOncart() {
  console.log("hey! im good");

  console.log(show);
} */

//#########MOBILE MENU
const mobileMenu = document.querySelector(".mobile-nav-menu");
const openMenu = () => {
  mobileMenu.style.display = "flex";
};
const closeMenu = () => {
  mobileMenu.style.display = "none";
};
