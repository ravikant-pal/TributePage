function showHide() {
  var x = document.getElementById("more-section");
  var b = document.getElementById("btn");
  if (x.style.display === "none") x.style.display = "block"; 
  else x.style.display = "none";
  if (b.innerText==="More...") b.innerText = "Less..";
  else b.innerText = "More...";
}
function jump() {
  location.href = "#more-section";
}
window.onload = function() {
  document.getElementById('more-section').style.display = "none";
};

