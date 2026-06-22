let nbLikes = 0;
const boutonLike = document.getElementById("mon-bouton-like");

if (boutonLike) {
  boutonLike.addEventListener("click", () => {
    nbLikes++;

    if (nbLikes >= 5) {
      window.locaion.href = "confirmation.html";
    } else {
      boutonLike.textContent = "💔 J'aime pas (" + nbLikes + ")";
    }
  });   
}

