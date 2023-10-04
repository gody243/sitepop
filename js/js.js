document.addEventListener('DOMContentLoaded', (event) => {

    const textArea = document.getElementById("commentaire");
    const charCount = document.getElementById("charCount");
    
    
    
    textArea.addEventListener("input", function () {
        
        const text = textArea.value;
        const count = text.length;
        charCount.textContent = count;
        
    });    
});    