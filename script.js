// Shizuku PWA Script ✨


// Registrar PWA
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("sw.js")
    .then(() => {
        console.log("PWA ativo!");
    });

}



// Botão de download

const button = document.getElementById("download");


button.addEventListener("click",()=>{


    button.innerHTML="⏳ Abrindo...";


    setTimeout(()=>{

        window.location.href =
        "https://shizuku.rikka.app/download/";

    },700);


});




// Efeito 3D pelo giroscópio

const card = document.querySelector(".card");


function gyro(e){


    let x = e.gamma || 0;

    let y = e.beta || 0;


    card.style.transform = 
    `rotateY(${x/5}deg) rotateX(${-y/10}deg)`;


}



if(window.DeviceOrientationEvent){


    window.addEventListener(
        "deviceorientation",
        gyro
    );


}




// Efeito de clique no botão

button.addEventListener("touchstart",()=>{

    button.style.transform="scale(.95)";

});


button.addEventListener("touchend",()=>{

    button.style.transform="scale(1)";

});



console.log("✨ Shizuku App iniciado!");