var listItem = document.querySelectorAll('li');
listItem.forEach((item) => {
    item.addEventListener('click', function (event) {
        this.classList.toggle('checked');
    })
});



