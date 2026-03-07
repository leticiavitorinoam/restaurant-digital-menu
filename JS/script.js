function filtrar(pais) {
  let itens = document.querySelectorAll(".item");

  itens.forEach(item => {
    if (pais === "todos" || item.classList.contains(pais)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}