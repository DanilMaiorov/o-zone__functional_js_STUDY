import { getData } from './getData'
import { renderGoods } from './renderGoods'
import { searchFilter } from './filters'

export function search () {
    const searchInput = document.querySelector('.search-wrapper_input');
    
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value
        getData().then((data) => {
            renderGoods(searchFilter(data, value))
        })
    })
}




  