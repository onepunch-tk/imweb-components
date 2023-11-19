document.addEventListener("scroll", (e) => {
  console.log("scroll");
});

window.addEventListener("load", (e) => {
  console.log("load");
});
fetch("https://onepunch-tk.github.io/imweb-components/public/test.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("main").innerHTML = data));
