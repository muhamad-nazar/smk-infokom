$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});


function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("viewMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Lihat Selengkapnya...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Lihat lebih Sedikit";
        moreText.style.display = "inline";
    }
}

function readMore1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("viewMore1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.textContent = "Lihat Selengkapnya...";
        moreText1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText1.textContent = "Lihat lebih Sedikit";
        moreText1.style.display = "inline";
    }
}