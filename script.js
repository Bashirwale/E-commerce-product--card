//SELCTING NUMBER OF ITEMS
const addCart = document.getElementById("itemcount");
let count = 0;
const increment = () => {
  count += 1;
  addCart.innerText = count;
};
const decrement = () => {
  if (count > 0) {
    count -= 1;
    addCart.innerText = count;
  } else {
    addCart.innerText = 0;
  }
};
//#########SHOWNG ITEM TO THE CART
const show = document.getElementById("showcart");
const showCart = () => {
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
};

addedToCart = document.getElementById("itemNumber");
console.log(addedToCart);

const addItem = () => {
  const numberOfItems = count;

  addedToCart.innerText = numberOfItems;
  addCart.innerText = 0;
  count = 0;
};

//#########MOBILE MENU
const mobileMenu = document.querySelector(".mobile-nav-menu");
const openMenu = () => {
  mobileMenu.style.display = "flex";
};
const closeMenu = () => {
  mobileMenu.style.display = "none";
};
