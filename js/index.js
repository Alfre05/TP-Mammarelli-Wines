/*nav con JS*/

let cad = `
<div class = "container"
    <div class="brand">
        <img class="brand-image" src="Assets/mammarelliwines-blanco-transparencia.png" alt="Logo de Mammarelli Wines">
    </div>
    
    <div class="screw">
    </div>
    
    <button class="open-menu" id="abrir"><i class="bi bi-list"></i></button>
    
    <nav class="navbar" id="navbar">
                <button id="cerrar" class="close-menu"><i class="bi bi-x-circle"></i></button>
                <ul class="nav-list text-serif">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./viñedos.html">Viñedos</a></li>
                <li><a href="./historia.html">Historia</a></li>
                <li><a href="./nosotros.html">Nosotros</a></li>
                </ul>
    </nav>
    <div class="nav-circle"></div>

</div>

`
document.querySelector("header").innerHTML=cad

/*----------------------------------------------*/


/*Menu Hamburguesa:*/

const nav = document.querySelector(".navbar");
const abrir = document.querySelector(".open-menu");
const cerrar = document.querySelector(".close-menu");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible")
})

/*----------------------------------------------*/

/*footer con JS */

let foot = `

       
    <div class="footer-circle">
    </div>

    <div class="logo-footer">
    <img src="Assets/Icons/corckscrew-removebg-preview.png" alt="">
    </div>

    <div class="links"> <!--Esto hay que desarrollarlo, la Carta, Contacto  y Dirección-->
    <ul>
      <li> <a href="./carta.html">Carta</a></li>
      <li> <a href="./contacto.html">Contacto</a></li>
      <li> <a href="./direccion.html">Dirección</a></li>
    </ul>
    </div>

    <div class="copyright">

    <p class="brand-copy" >©Copyright 2024 - Mammarelli Inc.</p>
    <p>Desarrollado por: Grupo 12-CaC-Comisión 24257</p>

    </div>
    

`
document.querySelector("footer").innerHTML=foot
