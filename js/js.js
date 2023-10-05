document.addEventListener('DOMContentLoaded', (event) => {

    const textArea = document.getElementById("commentaire");
    const charCount = document.getElementById("charCount");
    
    textArea.addEventListener("input", function () {
        
        //contenu de champs de texte
        const text = textArea.value;
        
        //calcul le nbre de carac
        const count = text.length;
        
        //mets a jouer l'affichage
        charCount.textContent = count;
        
    });    
});    