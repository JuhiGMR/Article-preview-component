const shareBtn = document.querySelector(".card__share-btn");
const sharePopup = document.querySelector(".card__share-popup");
const cardFooter = document.querySelector(".card__footer");

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sharePopup.classList.toggle("active");
  shareBtn.classList.toggle("active");
  cardFooter.classList.toggle("share-active");
});

// Close popup when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".card__footer")) {
    sharePopup.classList.remove("active");
    shareBtn.classList.remove("active");
    cardFooter.classList.remove("share-active");
  }
});
