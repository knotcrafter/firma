document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.transform = "skew(-10deg) scale(1.08)";
    });

    box.addEventListener("mouseout", () => {
      box.style.transform = "skew(-10deg) scale(1)";
    });
  });
});
