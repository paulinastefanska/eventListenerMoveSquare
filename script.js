const div = document.querySelector("div");
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drowActive = false;
let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
  div.style.backgroundColor = "grey";
  drowActive = !drowActive;

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
});

div.addEventListener("mousemove", (e) => {
  if (drowActive) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "black";
  drowActive = !drowActive;
});
