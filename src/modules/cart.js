import { renderCart } from './renderCart'
import { postData } from './postData'

export function cart () {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const goodsWrapper = document.querySelector('.goods');
    const cartTotal = cartModal.querySelector('.cart-total > span'); //суммарная стоимость
    const cartWrapper = document.querySelector('.cart-wrapper'); //обертка
    const cartSendBtn = cartModal.querySelector('.cart-confirm');//кнопка отправки данных
    const amountItem = document.querySelector('.counter');
    const cart = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : [] //по клику достаем весь массив из локалсторэджа

    function openCart () { //функция открытия корзины
        const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [] //проверили есть ли чтото в локал сторэдже по ключу корзины
        cartModal.style.display = 'flex'
        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }
    function closeCart () { //функция закрытия корзины
        cartModal.style.display = 'none'
    }
    function counter (data) { //функция подсчета элементов в корзине
        data ? amountItem.textContent = data.length : amountItem.textContent = 0
    }
    cartBtn.addEventListener('click', () => {
        openCart()
    })
    cartModal.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.target
        if(target.closest('.cart-close')) {
            closeCart()
        }
    })
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closeCart()
        }
    })
    //создание товаров в корзине
    goodsWrapper.addEventListener('click', (e) => {
        if(e.target.closest('.btn')){
            const card = e.target.closest('.card') //обозначили карточку товара
            const key = card.dataset.key    //достали дата атрибут
            const goods = JSON.parse(localStorage.getItem('goods')) //вытащили всё что есть из локалсторэджа
            const cart = localStorage.getItem('cart') ? 
            JSON.parse(localStorage.getItem('cart')) : [] //проверили есть ли чтото в локал сторэдже по ключу корзины
            const goodItem = goods.find((item) => { //перебрали массив методом find и тем самым достаём карточку товара
                return item.id === +key
            })
            cart.push(goodItem)
            counter(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })
    cartWrapper.addEventListener('click', (e) => {//для удаления элементов из корзины
        if(e.target.closest('.btn-primary')) { //получим кнопку
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [] //проверили есть ли чтото в локал сторэдже по ключу корзины
            const card = e.target.closest('.card') //обозначили карточку товара
            const key = card.dataset.key    //достали дата атрибут
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            cart.splice(index, 1)//сплайсом отрезаем куски массива
            counter(cart)
            localStorage.setItem('cart', JSON.stringify(cart)) //и снова записали
            renderCart(cart)//вызвали рендер
            cartTotal.textContent = cart.reduce((sum, goodItem) => { //пересчитали
                return sum + goodItem.price
            }, 0)
        }
    })
    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [] //по клику достаем весь массив из локалсторэджа
        postData(cart).then(() => {
            localStorage.removeItem('cart')
            renderCart([])
            cartTotal.textContent = 0
            counter([])
        })
    })
    counter(cart)
}
