
function calculerPrixBillet() {
    let age = parseInt(prompt("Entrez votre âge :"));
    let prixBillet;
  
    if (age <= 12) {
      prixBillet = 10;
    } else if (age >= 13 && age <= 17) {
      prixBillet = 15;
    } else if (age >= 18) {
      prixBillet = 20;
    } else {
      console.log("Âge invalide.");
    }
  
    if (prixBillet !== undefined) {
      alert("Le prix de votre billet est de : " + prixBillet + " $");
    }
  }
  
  calculerPrixBillet();
  