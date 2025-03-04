var arr=[
    {name:"Petals of roses", image:"https://images.unsplash.com/photo-1585768750637-ada36319a484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvc2VzfGVufDB8fDB8fHww"},
    {name:"Animals of town" , image:"https://images.unsplash.com/photo-1611473292683-85ac7a3688cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFscyUyMG9mJTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"the crowd of city",image:"https://images.unsplash.com/photo-1621183938542-fa5500838ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMGNyb3dkJTIwb2YlMjBjaXR5fGVufDB8fDB8fHww"},
    {name:"fruits of planet" , image:"https://plus.unsplash.com/premium_photo-1724026486959-2b2fa43c724c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzJTIwb2YlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D"},
    {name:"orange peeled" , image:"https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"web design",image:"https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"},
    {name:"Apple Juice",image:"https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Petals of roses", image:"https://images.unsplash.com/photo-1585768750637-ada36319a484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvc2VzfGVufDB8fDB8fHww"},
    {name:"Animals of town" , image:"https://images.unsplash.com/photo-1611473292683-85ac7a3688cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFscyUyMG9mJTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"the crowd of city",image:"https://images.unsplash.com/photo-1621183938542-fa5500838ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMGNyb3dkJTIwb2YlMjBjaXR5fGVufDB8fDB8fHww"},
    {name:"fruits of planet" , image:"https://plus.unsplash.com/premium_photo-1724026486959-2b2fa43c724c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzJTIwb2YlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D"},
    {name:"orange peeled" , image:"https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"web design",image:"https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"},
    {name:"Apple Juice",image:"https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"}
]


function showTheCards(){
    var clutter="";
    arr.forEach(function(obj){
        clutter+=`<div class="box">
        <img class="cursor-ponter" src="${obj.image}">
        <div class="caption">Lorem ipsum</div>
        </div>
        `;
    })
    console.log(clutter);

    document.querySelector(".container")
    .innerHTML=clutter;
}

function handleSearchFunctionality(){
    var input=document.querySelector("#searchinput");
    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display="block";
    })

    input.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display="none";
    })

    input.addEventListener("input",function(){
       const filteredArr = arr.filter(obj=>obj.name.toLowerCase().startsWith(input.value));
       var clutter="";
       filteredArr.forEach(function(obj){
           clutter+=`<div class="res flex px-8 py-3">
           <i class="ri-search-line" font-semibold mr-5"></i>
           <h3 class="font-semibold">${obj.name}</h3>
           </div>
           `;
       })

       document.querySelector(".searchdata").style.display="block";

       document.querySelector(".searchdata").innerHTML=clutter;
    })
}
handleSearchFunctionality();
showTheCards();