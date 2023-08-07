// upon scroll, execute myFunction
window.onscroll = function() {myFunction()};

var Header = document.getElementById("myHeader");

var sticky = Header.offsetTop;

// myFunction will add 'sticky' when scrolled, and remove it when reaching the top
function myFunction() {
    if (window.pageYOffset > sticky) {
        Header.classList.add("sticky");
    } else {
        Header.classList.remove("sticky")
    }
}