const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount; 
  updateSlidePosition();
}

setInterval(nextSlide, 2000);

function validateSignup() {
  var username = document.getElementById("inputText").value;
  var email = document.getElementById("kool").value;
  var password = document.getElementById("cool").value;
  var confirmPassword = document.getElementById("loop").value;

  var nameError = document.getElementById('message');
  var emailError = document.getElementById('ch');
  var passwordError = document.getElementById('cha');
  var confirmPasswordError = document.getElementById('char');


  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";

  nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  confirmPasswordError.style.display = "none";

  var isValid = true;

  if (username == "") {
      nameError.innerHTML = 'Please enter your name';
      nameError.style.display = "block";
      isValid = false;
  }

  if (email == "") {
      emailError.innerHTML = 'Please enter your email';
      emailError.style.display = "block";
      isValid = false;
  }

  if (password == "") {
      passwordError.innerHTML = 'Please enter a password';
      passwordError.style.display = "block";
      isValid = false;
  } else if (password.length < 3) {
      passwordError.innerHTML = 'Password must be at least three characters long';
      passwordError.style.display = "block";
      isValid = false;
  }

  if (confirmPassword == "") {
      confirmPasswordError.innerHTML = 'Please enter the password again';
      confirmPasswordError.style.display = "block";
      isValid = false;
  } else if (confirmPassword != password) {
      confirmPasswordError.innerHTML = 'Passwords do not match';
      confirmPasswordError.style.display = "block";
      isValid = false;
  }

  return isValid;
}
function see() {
  document.getElementById('page1').style.display='none';
      alert('Login Successful');
}
function on() {
  document.getElementById('page1').style.display='block';
}
function off() {
  document.getElementById('page1').style.display='none';
}


let cart = [];

function addToCart(id, name, price, image) {
    let item = cart.find(product => product.id === id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartCount = document.getElementById('cart-count');
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    let checkoutLink = document.getElementById('checkout-link');
    let emptyMessage = document.getElementById('empty-message');

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartItems.innerHTML = '';  
    let total = 0;

  
    if (cart.length === 0) {
        emptyMessage.style.display = 'block';  
        checkoutLink.style.pointerEvents = 'none'; 
        checkoutLink.style.opacity = '0.5'; 
    } else {
        emptyMessage.style.display = 'none'; 
        cart.forEach(item => {
            let li = document.createElement('li');
            li.classList.add("cart-item");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name} x${item.quantity} - Rs ${(item.price * item.quantity).toFixed(2)}</span>
                <div class="cart-buttons">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.textContent = total.toFixed(2);
        checkoutLink.style.pointerEvents = 'auto';  
        checkoutLink.style.opacity = '1'; 
    }
}

function changeQuantity(id, amount) {
    let item = cart.find(product => product.id === id);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter(product => product.id !== id);  
        }
    }
    updateCart(); 
}

function viewCart() {
    document.getElementById('cart').classList.remove('hidden');
}

function closeCart() {
    document.getElementById('cart').classList.add('hidden');
}












function on() {
  document.getElementById('page1').style.display = 'block';
}


function off() {
  document.getElementById('page1').style.display = 'none';
}


document.getElementById("page1").addEventListener("click", function(event) {
  let loginBox = document.querySelector(".page");
  if (!loginBox.contains(event.target)) { 
      off(); 
  }
});
function zoo2() {
  document.getElementById('zoom1').style.display = 'block';
}

function zoo1() {
  document.getElementById('zoom1').style.display = 'none';
}
function helo() {
  var a = document.getElementById("inputText").value;
  var d = document.getElementById("kool").value;
  var e = document.getElementById("address").value;
  

  var nameError = document.getElementById('do');
  var emailError = document.getElementById('doo');
  var addressError = document.getElementById('door');
  
 
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  addressError.innerHTML = "";

  var isValid = true;

  if (a == "") {
      nameError.innerHTML = 'Please enter your name';
      isValid = false;
  }

  if (d == "") {
      emailError.innerHTML = 'Please enter your email';
      emailError.style.display = "block";
      isValid = false;
  }

  if (e == "") {
      addressError.innerHTML = 'Please enter your address';
      isValid = false;
  }

  return isValid;
}
function validateLogin() {
  var username = document.getElementById("inputText").value;
  var password = document.getElementById("cool").value;

  var nameError = document.getElementById('moon');
  var passError = document.getElementById('loon');


  nameError.innerHTML = "";
  passError.innerHTML = "";

  var isValid = true;

  if (username == "") {
      nameError.innerHTML = 'Please enter your name';
      isValid = false;
  }

  if (password == "") {
      passError.innerHTML = 'Please enter your password';
      isValid = false;
  } else if (password.length < 3) {
      passError.innerHTML = 'Password must be at least three characters long';
      isValid = false;
  }

  return isValid;
}
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const value = star.getAttribute('data-value');
    highlightStars(value);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating);
  });

  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    ratingValue.textContent = `Rating: ${selectedRating}`;
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    star.classList.remove('hovered', 'selected');
    if (star.getAttribute('data-value') <= value) {
      star.classList.add('hovered');
    }
  });
}
