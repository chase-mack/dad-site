const hamburger = document.querySelector('#hamburger');
const dropDown = document.querySelector('.drop-down');

const openDrawer = () => {
    dropDown.style.display = "flex";
}

document.addEventListener('click', function (e) {
    let isClickInsideDropdown = hamburger.contains(e.target);
    if (dropDown.style.display === "flex" && !isClickInsideDropdown) {
        dropDown.style.display = "none";
    }
})