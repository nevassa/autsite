const productCards = document.querySelectorAll(".product-card");
const playfulCards = document.querySelectorAll(".product-card, .community-card, .button, .category-rail a");
const mascots = document.querySelectorAll(".site-mascot");
const revealItems = document.querySelectorAll(".section-title, .about-copy, .about-image, .visual-strip img, .product-card, .shop-callout, .community-card");

revealItems.forEach((item) => item.classList.add("reveal-item"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--active-product", `"${card.querySelector("h3")?.textContent || ""}"`);
  });
});

playfulCards.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    item.style.setProperty("--play-x", `${x.toFixed(2)}px`);
    item.style.setProperty("--play-y", `${y.toFixed(2)}px`);
  });

  item.addEventListener("pointerleave", () => {
    item.style.removeProperty("--play-x");
    item.style.removeProperty("--play-y");
  });
});

if (mascots.length) {
  window.addEventListener("pointermove", (event) => {
    const x = ((event.clientX / window.innerWidth) - 0.5) * -18;
    const y = ((event.clientY / window.innerHeight) - 0.5) * -12;
    document.documentElement.style.setProperty("--cursor-x", `${x.toFixed(2)}px`);
    document.documentElement.style.setProperty("--cursor-y", `${y.toFixed(2)}px`);

    mascots.forEach((mascot, index) => {
      const rect = mascot.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const tilt = Math.max(-8, Math.min(8, ((event.clientX - center) / window.innerWidth) * 16));
      const lift = Math.max(-7, Math.min(7, ((event.clientY - rect.top) / window.innerHeight) * -10));
      mascot.style.setProperty("--mascot-tilt", `${(-5 + tilt + index * 2).toFixed(2)}deg`);
      mascot.style.setProperty("--mascot-y", `${lift.toFixed(2)}px`);
    });
  });
}
