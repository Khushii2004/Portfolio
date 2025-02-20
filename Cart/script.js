//show real products
var products = [
   { name:"Black Chair" ,headline:"Clean, Aesthetic", price:"3,500", image:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
   
   { name:"Wooden Chair" ,headline:"Modern interior design", price:"5,790", image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
   { name:"White Chair" ,headline:"Decor", price:"10,000", image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww"}

];
var popular =[
    { name:"Black Chair" ,headline:"Clean, Aesthetic", price:"3,500", image:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
   
   { name:"Wooden Chair" ,headline:"Modern interior design", price:"5,790", image:"https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
   { name:"White Chair" ,headline:"Decor", price:"10,000", image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww"}
    
];

var cart=[];

function addProduct(){
    var clutter="";
    products.forEach(function(product,index){
        clutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
                    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img src="${product.image}" alt="product" class="w-full h-full object-cover rounded-xl">
                    </div>
                    <div class="data w-full px-2 py-5">
                        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                        <div class="flex justify-between w-full items-center mt-2">
                            <div class="w-1/2">
                                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                                <h4 class="font-semibold mt-2"> &#8377; ${product.price}</h4>
                            </div>
                            <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                                    class="add ri-add-line"></i></button>
                        </div>
                    </div>
                </div>
                `;
    })
    
    document.querySelector(".products").innerHTML=clutter;
}

function addPopular(){
    var clutter="";
    popular.forEach(function(product){
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}" alt="product">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>
        `;
    })
    document.querySelector(".populars").innerHTML=clutter;
}

function addToCart(){
    document.querySelector(".products").addEventListener("click",function(details){
       if(details.target.classList.contains("add")){
        cart.push(products[details.target.dataset.index]);
        console.log(cart);
       }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display="block";

        var clutter="";
        cart.forEach(function(prod,index){
            clutter+=`<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 overflow-hidden rounded-lg">
            <img src="${prod.image}" alt="product" class="w-full h-full object-cover">
            </div>
            <div>
            <h3 class="font-semibold">${prod.name}</h3>
            <h5 class="text-sm font-semibold opacity-80">${prod.price}/h5>
            </div>
            </div>
        `;})
        document.querySelector(".cartexpnd").innerHTML=clutter;
})
}
showCart();
addToCart();
addProduct();
addPopular();
//show real popular products
//on click of product add button add it to a cart