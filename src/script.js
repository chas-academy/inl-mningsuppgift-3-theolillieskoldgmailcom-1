const htmlProductInput = document.getElementById("productInput")
const htmlPriceInput = document.getElementById("priceInput")
const htmlButton = document.getElementById("addButton")
const htmlCartList = document.getElementById("cartList")

let cart = []

htmlButton.addEventListener("click",()=>{
    addProduct()
})

function addProduct(){

    const productName = htmlProductInput.value 
    const productPrice = Number(htmlPriceInput.value)

    const newProduct = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1,
    }

let itemExist = false

for(let product of cart){
    if(product.productName === productName){
        product.quantity++
        itemExist = true
    }
}

if(!itemExist){
    cart.push(newProduct)
}

htmlProductInput.value = ""
htmlPriceInput.value = ""
showCart()
}


function showCart(){

    htmlCartList.innerHTML = ""

    for(let item of cart){
        const li = document.createElement("li")
        li.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`
        htmlCartList.appendChild(li)
    }
}
