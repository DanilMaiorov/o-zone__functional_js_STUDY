import { getData } from './getData'
import { renderGoods } from './renderGoods'
import { categoryFilter } from './filters'

export function catalog () {
    const catalogBtn = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogArray = [catalogBtn, catalogModal]
    const catalogModalItems = document.querySelectorAll('.catalog-list li');

    
    let isOpen = false

    catalogArray.forEach(item => {
        item.addEventListener('click', () => {
            isOpen = !isOpen
            if(isOpen) {
                catalogModal.style.display = 'block'
            } else {
                catalogModal.style.display = ''
            } 
        })
    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent
            getData().then((data) => {
                renderGoods(categoryFilter(data, text))
            })
        })
    })
}