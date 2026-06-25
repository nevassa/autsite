const productCards = document.querySelectorAll(".product-card");
const mascots = document.querySelectorAll(".site-mascot");

productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--active-product", `"${card.querySelector("h3")?.textContent || ""}"`);
  });
});

if (mascots.length) {
  window.addEventListener("pointermove", (event) => {
    mascots.forEach((mascot, index) => {
      const rect = mascot.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const tilt = Math.max(-7, Math.min(7, ((event.clientX - center) / window.innerWidth) * 14));
      mascot.style.setProperty("--mascot-tilt", `${(-5 + tilt + index * 2).toFixed(2)}deg`);
    });
  });
}
