const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex";
    modalImage.src = e.target.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
