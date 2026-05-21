window.onload = ()=>{
document.getElementById("loader").style.display="none";
}

const darkMode = document.getElementById("darkMode");

if(darkMode){
darkMode.onclick = ()=>{
document.body.classList.toggle("dark");
}
}

const search = document.getElementById("search");

if(search){
search.addEventListener("keyup",()=>{
console.log(search.value)
})
}