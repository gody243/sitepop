document.addEventListener('DOMContentLoaded', (event) => {

    var textArea = document.getElementById("commentaire");
    var charCount = document.getElementById("charCount");
    
    textArea.addEventListener("input", function () {
        
        //contenu de champs de texte
        var text = textArea.value;
        
        //calcul le nbre de carac
        var count = text.length;
        
        //mets a jour l'affichage
        charCount.textContent = count;
        
    });    
});    