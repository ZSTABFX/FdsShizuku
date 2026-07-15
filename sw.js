const CACHE = "shizuku-v1";


const FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];



// Instalar

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE)
        .then(cache => {

            return cache.addAll(FILES);

        })

    );

});




// Abrir

self.addEventListener("activate", event => {

    console.log("Shizuku PWA ativo!");

});




// Carregar arquivos

self.addEventListener("fetch", event => {


    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response || fetch(event.request);

        })

    );


});