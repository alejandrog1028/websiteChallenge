document.getElementById("resizeButton").addEventListener("click", function () {
  const image = document.getElementById("dogImage");

  if (image.style.width === "500px") {
    image.style.width = "2px";
    image.style.border = "none";
  } else {
    image.style.width = "500px";
    image.style.border = "20px groove blue";
  }
});
