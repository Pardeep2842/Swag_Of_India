// With change in dropdown value, change the flag and the support contact number
function countriesFunction() {

    var countriesList = document.getElementById("countriesList");
    var value = countriesList.options[countriesList.selectedIndex].value;

    if (value == "india") {
        document.getElementById("selector-img").src = "images/india.png"
        document.getElementById("contact-no").href = "tel:+91 7988836295"
        document.getElementById("contact-no").innerHTML = "<img src='images/Group 2559.png' alt='contact'> +91 9838203720"
    } else if (value == "usa") {
        document.getElementById("selector-img").src = "images/Group 2560.png"
        document.getElementById("contact-no").href = "tel:+1 123 7654321"
        document.getElementById("contact-no").innerHTML = "<img src='images/Group 2559.png' alt='contact'> +1 123 7654321"
    } else if (value == "uk") {
        document.getElementById("selector-img").src = "images/UK.png"
        document.getElementById("contact-no").href = "tel:+44 1234567890"
        document.getElementById("contact-no").innerHTML = "<img src='images/Group 2559.png' alt='contact'> +44 1234567890"
    } else {
        document.getElementById("selector-img").src = "images/Germany.png"
        document.getElementById("contact-no").href = "tel:+12 0123456789"
        document.getElementById("contact-no").innerHTML = "<img src='images/Group 2559.png' alt='contact'> +12 0123456789"
    }
}


// the blue button on bottom to reach the top of the website again
var scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollTopFunction() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}


// Header navigation bar “sticky”
window.addEventListener("scroll", function () {
    var stickyHeader = document.getElementById("stickyHeader")
    var headerOffsetTop = stickyHeader.offsetTop;

    if (window.pageYOffset > headerOffsetTop) {
        stickyHeader.classList.add("sticky-scroll")
    } else {
        stickyHeader.classList.remove("sticky-scroll")
    }
})


// addcart items index number
setInterval(() => {
    function renderCartItems() {
        const cartItems = cart.getAllItems();
        document.getElementById('myCartItem').innerHTML = cartItems.length;
    }    
    renderCartItems();

    function renderWishlistItem() {
        const wishlistItem = wishlist.getAllItems();
        document.getElementById('myWishlistItem').innerHTML= wishlistItem.length;
    }
    renderWishlistItem()
}, 100);




