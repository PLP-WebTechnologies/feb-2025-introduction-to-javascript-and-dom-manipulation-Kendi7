
const h = document.getElementById("h");
h.textContent = "Am learning this things now and is not easy ";
h.style.color = "red";
h.style.fontFamily = "Arial, sans-serif";
h.style.fontWeight = "bold";
/*
const p = document.getElementsById("p");
p.textContent = "new things are not easy to learn but with time and practice, it will be easy to learn";
p.style.color = "blue";
*/
const container = document.getElementById("container")
const btn = document.getElementById("btn");
btn.addEventListener("click",  () => {
    const newItiem = document.createElement("p"); 
    newItiem.textContent = "new things are not easy to learn but with time and practice, it will be easy to learn";
    newItiem.style.color = "blue";
    newItiem.style.fontWeight = "bold";
    container.appendChild(newItiem);
});
