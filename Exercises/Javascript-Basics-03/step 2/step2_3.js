const links = document.querySelectorAll("a");
const text = document.querySelector("p");
links.forEach(Element => {
    Element.addEventListener("click", () => {
      Element.id == "show"
        ? (text.style.display = "block")
        : (text.style.display = "none");
    });
  });