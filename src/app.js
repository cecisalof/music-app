/* Adding 'on' class based on  window.location.href */

document.querySelectorAll('.active').forEach((link) => {
    console.log(link.href);
    if (link.href === window.location.href) {
        link.classList.add("on");
        link.setAttribute("aria-current", "page");
    }
});
