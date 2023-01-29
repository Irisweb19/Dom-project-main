const products  = [{
    name: "Prince",
    qty: 1,
    img: "PR.JPG",
    price: 1000,
},
{
    name: "Zee",
    qty: 3,
    img: "ZE.JPG",
    price: 50.04,
},
{
    name: "Max",
    qty: 5,
    img: "MAX.PNG",
    price: 150.02,
},
{
    name: "Yunus",
    qty: 5,
    img: "YU.JPG",
    price: 500,
},
{
    name: "RAE",
    qty: 5,
    img: "RAE.PNG",
    price: 600,
},
{
    name: "Abraham",
    qty: 5,
    img: "AB.jpeg",
    price: 350,
},
{
    name: "Regal",
    qty: 5,
    img: "reg.jpg",
    price: 00,

},
{
    name: "Arsenal",
    qty: 5,
    img: "IMG_0105.jpg",
    price: 1000000,

},
]

let items = ""
products.map((product)=>{
    items += `
        <div class="card" style="width: 18rem;">
            <img src="${product.img}" height="300px" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="fle"> 
                    <h5 class="card-title">${product.name}</h5>
                    <h5 class="card-title" id="price">$${product.price}</h5>
                </div> 
                <div class="fle">
                <p id="qty"><b>QTY:</b></p> 
                <input class="inpQty" type="number" min="1" value="${product.qty}">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <a href="#" class="btn btn-primary" >Add to cart</a>
                </div>
            </div>
        </div>
    `
})

const cParent = document.querySelector(".Cparent")
cParent.innerHTML = items 


const fa = document.querySelectorAll(".fa")

for(let i=0; i<fa.length; i++){
    fa[i].addEventListener("click", ()=>{
        fa[i].classList.toggle("fa-red")
    })
}