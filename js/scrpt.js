const botao = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image img")

botao.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        botao.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

       const id = btn.getAttribute("id");

       btn.querySelector(".color").classList.add("selected");

       image.classList.add("changing");

       
       image.setAttribute("src",`img/iphone_${id}.jpg`);

       setTimeout(()=>{
       image.classList.toggle("changing")
       },200)
    });
});