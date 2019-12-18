var b = document.querySelector("button");
b.addEventListener("click", function() {
  var r = confirm("ok for reset or cancel to back");
  if (r) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  }
});