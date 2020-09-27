const openCV = () => {
  window.openCV = cv;
};

const loadImage = () => {
  const imgElement = document.getElementById('image');
  const inputElement = document.getElementById('file');
  inputElement.addEventListener('change', (e) => {
    const { target : { files } } = e;
    const [file] = files;
    imgElement.src = URL.createObjectURL(file);
  }, false);
  imgElement.onload = () => {
    let mat = window.openCV.imread(imgElement);
    window.openCV.imshow('canvasOpenCV', mat);
    mat.delete();
  };
};

window.addEventListener('DOMContentLoaded', evt => {
  loadImage();
});