const navbarBtn = document.getElementById("navbarBtn");
const menu_li_d1 = document.querySelector("#d1");
const menu_li_d2 = document.querySelector("#d2");
const menu_li_d3 = document.querySelector("#d3");
const searchBoxBtn = document.getElementById("searchBoxBtn");
const searchBox = document.getElementById("searchBox");
// function setActive(obj){
    
// }

navbarBtn.addEventListener("click", function(){
    navbarBtn.classList.toggle("active");
});

menu_li_d1.addEventListener("click", function(){
    menu_li_d1.classList.toggle("active");
});

searchBoxBtn.addEventListener("click", function(){
    if(searchBox.classList.toggle("active"))
        document.querySelector(".logo").style.display = "none";
    else
        document.querySelector(".logo").style.display = "block";
});