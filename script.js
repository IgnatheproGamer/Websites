document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("¡Gracias por contactar con MotoSpeed! Te responderemos pronto.");

    this.reset();
});
