export function searchFilter (goods, value) { //фильтрация по названию
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().trim().includes(value.toLowerCase().trim())
    })
}
export function categoryFilter (goods, value) { //фильтрация по категории
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}
export function priceFilter (goods, min, max) { //фильтрация по цене
    return goods.filter((goodsItem) => {
        if(min === '' && max === '') {
            return goodsItem
        } else if (min !== '' && max !== '') {
            return  max >= goodsItem.price && goodsItem.price >= min
        } else if (min !== '' && max === '') {
            return goodsItem.price >= +min
        } else if (min === '' && max !== '') {
            return  goodsItem.price <= +max
        }
    })
}
export function saleFilter (goods, checkbox) {
    return goods.filter((goodsItem) => {
        if(checkbox) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }
    })
}
