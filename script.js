
// Adicionar atalhos de teclado
document.addEventListener("keydown", function(event) {
if (event.ctrlKey && event.key === "q") {
document.getElementById("sobre").click();
} 
if (event.ctrlKey && event.key === "i") {
window.open("https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReal_Madrid_CF&psig=AOvVaw3b9s0MoxN7LwqZpHTfWkem&ust=1713450897833000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLic1ZS8yYUDFQAAAAAdAAAAABAE"); 
}
if (event.ctrlKey && event.key === "m") {
document.getElementById("mensagem").focus();
}
});
