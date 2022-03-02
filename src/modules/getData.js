export function getData (str) {
   
    return fetch(
/*         `https://ozon-test-7a259-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`) //работа с локальным сервером
        .then((res) => res.json()) */
/*     return fetch(*/'http://localhost:3000/goods') //работа с локальным сервером
    .then((res) => res.json()) 
}
