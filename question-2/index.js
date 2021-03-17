import "regenerator-runtime";

const frag = document.createDocumentFragment();
const listDisplay = document.getElementById("listDisplay");
const inputBox = document.getElementById("inputBox");

(async () => {
  const resp = await fetch("https://api.publicapis.org/categories");
  const response = await resp.json();

  const el = response.map((e) => {
    const l = document.createElement("li");
    l.innerText = e;
    frag.appendChild(l);
  });

  listDisplay.appendChild(frag);
})();

inputBox.addEventListener("input", () => {
  const filter = inputBox.value.toLowerCase();
  const li = listDisplay.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    if (li[i]) {
      if (li[i].innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});
