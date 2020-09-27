window.addEventListener('DOMContentLoaded', evt => {
  const img = document.querySelector("img")
  const file = document.querySelector("input[type=file]");
  file.addEventListener("change", (e) => {
    img.src = URL.createObjectURL(e.target.files[0]);
  }, false);
});