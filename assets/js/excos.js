function togglePastExcos() {
  let pastExcos = document.getElementById("pastExcos");
  let button = document.querySelector(".toggle-button");
  if (pastExcos.style.display === "none" || pastExcos.style.display === "") {
      pastExcos.style.display = "grid";
      button.textContent = "Hide Past Executives";
  } else {
      pastExcos.style.display = "none";
      button.textContent = "View Past Executives";
  }
}