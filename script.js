const container = document.querySelector(".container"); //мы приготовили контейнер в html файле и
// мы черех querySelector берем контейнер


//Метод $.get() загружает данные с сервера с помощью HTTP-запроса GET.
//res -> это результат, всегда на первую переменную передается, еще есть err, при ошибке err вызываем
// 1 .than мы работали со списком то есть мы обрабатывали список на обьект 
// функция json() обычный наш список, превратить на обьект
// в переменую data сохраняется наши обьекты
//.than -> после
// после 2 than мы работаем с обьектом
// forEach -> метод forEach() позволяет выполнить переданную функцию один раз для каждого 
// элемента в массиве в порядке возрастания индекса.
//мы будем работать c дом элементами внутри функции forEach()
// data -> users -> это обьекты то есть мы во втором then объект как угодна называем
//element -> это внутри users каждый элемент

// Метод setAttribute() предназначен для добавления в элемент нового атрибута с указанным значением. 
// Если указанный атрибут уже существует, то значение этого атрибута изменяется на значение, переданное 
// методу в качестве второго аргумента.

function get() {     
    fetch('db.json')
        .then((res) => {
            let data = res.json();
            console.log(data);
            return data
        })
        .then((users) => {
            users.forEach(element => {
                const div = document.createElement("div") //создаем с помощью createElement  div элемент
                
                const img = document.createElement("img") // создаем img элемент
                const h3 = document.createElement("h3") // создаем h2 элемент
                const h2 = document.createElement("h2")
                const p = document.createElement("p")

              
               


                div.className = "cart" // мы создаем для div класс cart
                img.className = "photo"
                h3.className = "title"

               


               
                //aall.setAttribute("href", category)
                img.setAttribute('src', element.img); // мы обращаемся к элементу img с ключом img
                h3.innerHTML = `${element.desc}` // мы обращаемся к элементу h2 с ключом desc
                h2.innerHTML = `${element.price}` //мы обращаемся к элементу h3 с ключом price
                p.innerHTML = `${element.title}`//мы обращаемся к элементу p с ключом title

               
               


                div.appendChild(img)
                div.appendChild(p)
                div.appendChild(h2)
                div.appendChild(h3)
                div.appendChild(h2)
                
                
                container.appendChild(div)
                
            });
               
            })
            .catch(() => {
                console.log('Error');
            })

            data = data.join("");
            productsInner.innerHTML = data;
            return data;
}

get();




// Промис, возвращённый catch (), отклоняется, если onRejected выдаёт 
// ошибку(throw) или возвращает Promise, который был отклонён; В противном случае Promise, 
// возвращаемый catch () имеет статус  выполнено  (fulfilled)