window.addEventListener('load', function () {
    get(data);
});
const containerBtn = document.querySelector(".containerBtn");


const divBtn = document.createElement("div")
const buttonall = document.createElement("button")
const buttonlaptops = document.createElement("button")
const buttonphones = document.createElement("button")
const buttontv = document.createElement("button")
const h1 = document.createElement("h1")
const productInner = document.createElement("div")


divBtn.className = "divBtn"
// buttonall.className ="click_all"
// buttonlaptops.className = "click_laptops"
// buttonphones.className = "click_phones"
// buttontv.className = "click_tv"
h1.className = "mainTitle"

h1.innerText = 'Наши товары'
buttonall.innerText = 'All'
buttonlaptops.innerText = 'laptops'
buttonphones.innerText = 'phones'
buttontv.innerText = 'tv'

// buttonall.setAttribute("class", "All")
// buttonlaptops.setAttribute("class", "laptops")
// buttonphones.setAttribute("class", "phones")
// buttontv.setAttribute("class", "tv")

buttonall.setAttribute("class",  "btn All")
buttonlaptops.setAttribute("class", "btn laptops")
buttonphones.setAttribute("class", "btn phones")
buttontv.setAttribute("class", "btn tv")

productInner.setAttribute("class", "product__inner")

buttonall.setAttribute("data-cat", "All")
buttonlaptops.setAttribute("data-cat", "laptops")
buttonphones.setAttribute("data-cat", "phones")
buttontv.setAttribute("data-cat", "tv")


divBtn.appendChild(h1)
divBtn.appendChild(buttonall)
divBtn.appendChild(buttonlaptops)
divBtn.appendChild(buttonphones)
divBtn.appendChild(buttontv)
containerBtn.appendChild(divBtn)




const btnAll = document.querySelector(".All");
const btnLaptops = document.querySelector(".laptobs");
const btnPhones = document.querySelector(".phones");
const btnTv = document.querySelector(".tv");
const productsInner = document.querySelector(".products__inner")




btnAll.addEventListener("click", () => {
    get(data);
});

btnLaptops.addEventListener("click", () => {
    const laptobsView = users.filter((word) => word.category === "laptobs");
    get(laptobsView);
});


btnPhones.addEventListener("click", () => {
    const phonesView = users.filter((word) => word.category === "phones");
    get(phonesView);
});

btnTv.addEventListener("click", () => {
    const tvView = users.filter((word) => word.category === "tv");
    get(tvView);
});








// const filterBtns = document.querySelectorAll(".products__filters-btn");

// get(products);

// filterBtns.forEach(function(btn) {
//     btn.addEventListener("click", function (e) {
//         const category = e.currentTarget.dataset.cat;

//         const productCategory = products.filter(function (item) {
//             if (item.category === category) {
//                 return item;
//             }
//         });

//         if (category === "All") {
//             get(products);
//         } else {
//             get(productCategory);
//         }
//     });
// });