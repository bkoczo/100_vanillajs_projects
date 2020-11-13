const storeItems = document.querySelectorAll('.store-item');
const buttons = document.querySelectorAll('.btn');
const searchBox = document.getElementById('search-item');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const sweetsType = e.target.dataset.filter
        storeItems.forEach((item) => {
            if (sweetsType === 'all') {
                item.style.display = 'block'
            } else {
                if (sweetsType === item.dataset.item) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    })
})


searchBox.addEventListener('keyup', (e) => {

    const searchFilter = e.target.value.toLowerCase().trim()
    //display only items that contain filter input

    storeItems.forEach((item) => {
        if (item.dataset.item.includes(searchFilter)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})
