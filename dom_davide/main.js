 // Seleziona tutti i paragrafi
 let paragraphs = document.querySelectorAll("p");

 // Funzione per generare un colore casuale in formato RGB
 function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

 // Cambia il colore dei paragrafi
 document.querySelector("#changeColorBtn").addEventListener("click", () => {
     paragraphs.forEach(paragraph => {
         paragraph.style.color = getRandomColor();
     });
 });

 // Imposta il testo in grassetto
 document.querySelector("#boldTextBtn").addEventListener("click", () => {
     paragraphs.forEach(paragraph => {
         paragraph.style.fontWeight = "bold";
     });
 });

 // Mostra/Nascondi i paragrafi
 document.querySelector("#toggleVisibilityBtn").addEventListener("click", () => {
     paragraphs.forEach(paragraph => {
         paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
     });
 });