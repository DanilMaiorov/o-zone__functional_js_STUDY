import { getData } from './getData'
import { postData } from './postData'
import { renderGoods } from './renderGoods'

export function load () {
    getData().then((data) => {
        renderGoods(data)
    })          
}