import { getData } from './getData'
import { renderGoods } from './renderGoods'
import { priceFilter, saleFilter } from './filters'

export function price () {
    const prices = document.querySelectorAll('.filter-price_input');
    const sale = document.querySelector('#discount-checkbox');
    const checkbox = document.querySelector('.filter-check_checkmark');

    prices.forEach(price => {
        if(price.id === 'min') {
            const min = price.id === 'min'
        }
        if(price.id === 'max') {
            const max = price.id === 'max'
        }
        price.addEventListener('input', () => {
            getData().then((data) => { 
                renderGoods(priceFilter(saleFilter(data, sale.checked), min.value, max.value))
            }) 
        }) 
    })
    sale.addEventListener('change', () => {
        if(sale.checked) {
            checkbox.classList.add('checked')
        } else {
            checkbox.classList.remove('checked')
        }
            getData().then((data) => { 
                renderGoods(priceFilter(saleFilter(data, sale.checked), min.value, max.value))
            }) 
    })
}

