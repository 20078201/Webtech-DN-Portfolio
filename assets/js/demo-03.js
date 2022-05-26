/*
* Shopping Cart
* File Name: demo-01.js
* Author: Nhat-Dat Ngo
* Date: 19/05/2022
*
*
*
* */

if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let addToCartBtns = document.getElementsByClassName('add-to-cart-btn')
    for (let i = 0; i < addToCartBtns.length; i++) {
        let buttons = addToCartBtns[i]
        buttons.addEventListener('click', addToCartClicked)
    }

    let clearCartButton = document.getElementById('clear-btn')
    clearCartButton.addEventListener('click', clearCart)
    updateCart()
}

function addToCartClicked(event) {
    // variable to set the add to cart button
    let button = event.target
    // used to access elements in the class=product
    let shopItem = button.parentElement.parentElement
    // product title
    let title = shopItem.getElementsByClassName('product-title')[0].innerText
    let price = shopItem.getElementsByClassName('product-price')[0].innerText
    let quantity = 1

    addProductToCart(title, price, quantity)
    updateCart()
}

function addProductToCart(title, price, quantity) {
    // We are creating a div with class cart-row which will then be inserted in a div called cartItems
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    cartRow.classList.add('cart-product-item')

    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = document.getElementsByClassName('cart-product-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This product is already in your shopping cart!')
            return
        }
    }
    let cartRowContents = `
    <span class="cart-product-title cart-column">${title}</span>
    <span class="cart-product-price cart-column">${price}</span>
    <label>
        <input class="cart-product-quantity cart-column quantity" type="number" min="0" value="${quantity}">
    </label>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
    // return the input that was clicked on
    let input = event.target

    // remove
    if (input.value === "0") {
        input.parentElement.parentElement.remove()
    }
    updateCart()
}

function updateCart() {
    // Target the cart items that is located in main section of card.
    // This is so we can target the cart row divs later
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    // Targeting cart rows who has a parent of cart-items
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    // set a total price in a variable
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        // set one row at a time
        let cartRow = cartRows[i]
        // grab the price and quantity from the cart
        let priceHTML = cartRow.getElementsByClassName('cart-product-price')[0]
        let quantityHTML = cartRow.getElementsByClassName('cart-product-quantity')[0]
        //
        let price = parseFloat(priceHTML.innerText.replace('$', ''))
        let quantity = parseInt(quantityHTML.value)
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total')[0].innerText = '$' + total
}

function clearCart(event) {
    let btnLocation = event.target
    let cardElement = btnLocation.parentElement.parentElement.parentElement
    let productList = cardElement.getElementsByClassName('cart-product-item')
    for (let i = productList.length - 1; i >= 0; i--) {
        productList[i].remove()
    }
    updateCart()
}
