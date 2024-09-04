const menu=[
    {
        id:1,
        title:"Strawberry pancakes",
        category:"breakfast",
        price:15.99,
        img:"pancake.jpg",
        desc:`Text is the exact, original words written 
        by an author. Text is also a specific work as
        written by the original author.`,
    },
    
    {
        id:2,
        title:"Pizza",
        category:"lunch",
        price:13.99,
        img:"pizza.jpg",
        desc:`Text is the exact, original words written 
        by an author. Text is also a specific work as
        written by the original author.`,
    },
    {
        id:3,
        title:"Burger",
        category:"lunch",
        price:10.99,
        img:"burger.jpg",
        desc:`Text is the exact, original words written 
        by an author. Text is also a specific work as
        written by the original author.`,
    },
    {
        id:4,
        title:"MilkShake",
        category:"Shakes",
        price:3.99,
        img:"milkshake.jpg",
        desc:`Text is the exact, original words written 
        by an author. Text is also a specific work as
        written by the original author.`,
    },

    {
        id:5,
        title:"Cupcake",
        category:"breakfast",
        price:4.99,
        img:"cupcake.jpg",
        desc:`Text is the exact, original words written 
        by an author. Text is also a specific work as
        written by the original author.`,
    },
   
];

const sectionCenter=document.querySelector(".section-center");
const filterBtns=document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
});

filterBtns.forEach(function(btn) {
    btn.addEventListener("click",function(e){
        const category=e.currentTarget.dataset.id;
        const menuCategory=menu.filter(function(menuItem){
            if(menuItem.category === category){
            return menuItem;
            }
        });
        if(category === "all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems){
    let displayMenu=menuItems.map(function(item){
             return ` <article class="menu-item">
               <img class="pancak" src=${item.img} alt=${item.title}>
               <div class="item-info">
                 <header>
                     <h4>${item.title}</h4>
                     <h4 class="price">$${item.price}</h4>
                 </header>
                 <p class="item-text">${item.desc}</p>
               </div>
         </article>`;
         });
         displayMenu = displayMenu.join("");
         console.log(displayMenu);
         sectionCenter.innerHTML = displayMenu;
   
};