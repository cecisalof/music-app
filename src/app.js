window.addEventListener('load', function () {
    let pageTitle = document.title;
    let navEl = document.getElementById("nav-list").getElementsByTagName("li");

    for (let item of navEl) {
        if (pageTitle == item.textContent) {
            let className = document.querySelector(`a#${item.textContent}.active`).classList;
            console.log(className.toggle('on'));
        }
    }
})
