// Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('#cart ul');
const cartTotal = document.querySelector('.cart-total span:last-child');

let cartItems = [];
let total = 0;

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = button.parentNode;
    const productTitle = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('span').textContent.slice(1));

    const item = {
      id: index + 1,
      title: productTitle,
      price: productPrice
    };

    cartItems.push(item);
    total += productPrice;

    // Update cart UI
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <span>${item.title}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;
    cartItemsList.appendChild(cartItem);

    cartTotal.textContent = `$${total.toFixed(2)}`;
  });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input[type="text"]');
const searchButton = document.querySelector('.search-bar button[type="submit"]');
const productTitles = document.querySelectorAll('.product h3');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();

  productTitles.forEach(title => {
    const product = title.parentNode;
    const productTitle = title.textContent.toLowerCase();

    if (productTitle.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});


   
