const products = [
    {
      id: 1,
      title: "Xiaomi Mi 11 Lite",
      category: "смартфоны",
      price: 28700,
      img: "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
      desc: "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
    },
    {
      id: 2,
      title: "Телевизор LG OLED65CXRLA",
      category: "tv",
      price: 219980,
      img: "https://www.kivano.kg/images/product/92929/full/1621780991_50190300.jpg",
      desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
    },
    {
      id: 3,
      title: "Asus TUF Dash F15 FX516PE",
      category: "ноутбуки",
      price: 219980,
      img: "https://www.kivano.kg/images/product/94465/full/1623993247_50916100.png",
      desc: "Операционная система: DOS; Процессор: Intel Core  i7-11370H; Разрешение экрана: 1920 x 1080 Full HD; Графический контроллер: Nvidia RTX 3050TI; Объем оперативной памяти: 16 GB",
    },
    {
      id: 4,
      title: "Lenovo TUF Dash F15 FX516PE",
      category: "ноутбуки",
      price: 150000,
      img: "https://www.kivano.kg/images/product/94465/full/1623993247_50916100.png",
      desc: "Операционная система: DOS; Процессор: Intel Core  i7-11370H; Разрешение экрана: 1920 x 1080 Full HD; Графический контроллер: Nvidia RTX 3050TI; Объем оперативной памяти: 16 GB",
    },
  ];
  
  window.addEventListener("load", function () {
    const productsInner = document.querySelector(".products__inner");
    const filtersContainer = document.querySelector(".products__filters");
  
    displayProductsItems(products);
    displayFilterBtns();
  
    function displayProductsItems(products) {
      let displayProducts = products.map(function (item) {
        return `<article key="${item.id}" class="products__item">
        <img
          class="products__item-photo"
          src="${item.img}"
          alt=""
        />
        <div class="products__item-info">
          <header>
            <h3>${item.title}</h3>
            <span class="products__item-price">${item.price}сом</span>
          </header>
          <p class="products__item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
      });
  
      displayProducts = displayProducts.join("");
      productsInner.innerHTML = displayProducts;
    }
  
    function displayFilterBtns() {
      const categories = products.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["все"]
      );
  
      const categoryBtns = categories
        .map(function (category) {
          return `
          <button class="products__filters-btn" type="button" data-cat="${category}">
            ${category}
          </button>
        `;
        })
        .join("");
  
      filtersContainer.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll(".products__filters-btn");
  
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.cat;
          const productCategory = products.filter(function (item) {
            if (item.category === category) {
              return item;
            }
          });
          if (category === "все") {
            displayProductsItems(products);
          } else {
            displayProductsItems(productCategory);
          }
        });
      });
    }
  });