(function () {

    let storeItems = document.querySelectorAll('.store-item');
    let lightBox = document.querySelector('.lightbox-container');
    let lightBoxItem = document.querySelector('.lightbox-item');
    let images = document.querySelectorAll('.store-img');

    let imageList = [];
    let imageCounter = 0;


    images.forEach(function (image) {
        imageList.push(image.src);
    })


    storeItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            let image = e.target.src;
            lightBoxItem.style.backgroundImage = `url(${image})`;
            lightBox.classList.add('show');
            imageCounter = imageList.indexOf(image);
        });
    });

    const buttons = document.querySelectorAll('.lightbox-control');
    const closeBtn = document.querySelector('.lightbox-close');

    closeBtn.addEventListener('click', () => {
        lightBox.classList.remove('show');
    })

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.classList.contains('btnLeft')) {
                imageCounter--;
                if (imageCounter < 0) {
                    imageCounter = imageList.length - 1;
                }
                lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
            } else if (button.classList.contains('btnRight')) {
                imageCounter++;
                if (imageCounter > imageList.length - 1) {
                    imageCounter = 0;
                }
                lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
            }
        })
    })
})();
