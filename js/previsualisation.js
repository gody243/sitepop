//chargement de la page
document.addEventListener('DOMContentLoaded', (event) => {
    
  var image = document.getElementById('image');
  var imagePrevisualisation = document.getElementById('image-previsualisation');
        
  image.addEventListener('change', function() {
   //on verifie si fichier selectionné
    if (image.files && image.files[0]) {
      
      //nouvel objet
      var lecteur = new FileReader();
      
      //execute lorsque la lecture est fini
      lecteur.onload = function(e) {
        //mets a jour l'element de l'image avec les donnée de l'image chargée
        imagePrevisualisation.src = e.target.result;
      }
      //lecture du fichier
      lecteur.readAsDataURL(image.files[0]);
    }
    });
});