const products = {
  guia: {
    category: "Guia",
    title: "Guia do Humano de Estimação",
    description:
      "Um material para reunir tudo que importa sobre o pet: rotina, cuidados, preferências, sinais e pequenas memórias que ajudam o humano a cuidar melhor.",
    price: "R$ 96,00",
    images: [
      "MOCKUP/GUIA DO HUMANO DE ESTIMAÇÃO MOCKUP.png?v=20260624-1744",
      "MOCKUP/GUIA DO HUMANO DE ESTIMAÇÃO MOCKUP 2.png?v=20260624-1742",
      "MOCKUP/GUIA DO HUMANO DE ESTIMAÇÃO MOCKUP 3.png?v=20260624-1743",
      "MOCKUP/GUIA DO HUMANO DE ESTIMAÇÃO MOCKUP 5.png?v=20260624-1756",
      "MOCKUP/GUIA DO HUMANO DE ESTIMAÇÃO MOCKUP 6.png?v=20260624-1757",
    ],
    details: ["Organização afetiva", "Pensado para tutores jovens", "Companheiro de rotina", "Produto editorial da marca"],
  },
  "camiseta-certified": {
    category: "Camisetas",
    title: "Camiseta Certified Dog Person",
    description:
      "Camiseta com presença gráfica da AUTSIDE para quem transforma o amor por pet em identidade visual.",
    price: "R$ 129,90",
    images: [
      "MOCKUP/MOCKUP CAMISETA CERTIFIED DOG PERSON.jpg",
      "MOCKUP/MOCKUP CAMISETA CERTIFIED DOG PERSON WHITE.jpg",
      "MOCKUP/MOCKUP CAMISETA CERTIFIED DOG PERSON (2).jpg",
    ],
    details: ["Visual urbano", "Estampa com personagem", "Peça para combinar com bandanas", "Produto de comunidade"],
  },
  "camiseta-fora": {
    category: "Camisetas",
    title: "Camiseta Fora da Casinha",
    description:
      "Camiseta com energia de passeio e linguagem urbana, feita para sair de casa junto com o pet.",
    price: "R$ 139,90",
    images: [
      "MOCKUP/TSHIRT MOCKUP FORA DA CASINHA.jpg",
    ],
    details: ["Frase da marca", "Visual de rua", "Boa para compor com ecobag", "Produto de passeio"],
  },
  bandana: {
    category: "Bandanas",
    title: "Bandana Modo Passeio Ativado",
    description:
      "Bandanas coloridas para o pet entrar no universo AUTSIDE junto com o tutor, criando combinações de cor e atitude.",
    price: "R$ 39,90",
    images: [
      "MOCKUP/BANDANA ROXA.png",
      "MOCKUP/BANDANA AMARELA.png",
      "MOCKUP/BANDANA ROSA.png",
      "MOCKUP/BANDANA VERDE.png",
      "MOCKUP/BANDANA AZUL.png",
      "MOCKUP/BANDANA VERMELHA.png",
    ],
    colors: [
      { name: "Roxa", value: "#5b42c8", image: "MOCKUP/BANDANA ROXA.png" },
      { name: "Amarela", value: "#dcff17", image: "MOCKUP/BANDANA AMARELA.png" },
      { name: "Rosa", value: "#ff79ad", image: "MOCKUP/BANDANA ROSA.png" },
      { name: "Verde", value: "#56c271", image: "MOCKUP/BANDANA VERDE.png" },
      { name: "Azul", value: "#4d95e8", image: "MOCKUP/BANDANA AZUL.png" },
      { name: "Vermelha", value: "#e93838", image: "MOCKUP/BANDANA VERMELHA.png" },
    ],
    details: ["Cores de marca", "Estampa lúdica", "Ideal para fotos combinando", "Produto-chave da comunidade"],
  },
  ecobag: {
    category: "Ecobag",
    title: "Ecobag Fora da Casinha",
    description:
      "Ecobag para passeio, rotina e cidade. Leva o universo da marca para fora de casa sem perder o humor.",
    price: "R$ 79,90",
    images: [
      "MOCKUP/MOCKUP ECOBAG FORA DA CASINHA.jpg",
      "MOCKUP/MOCKUP ECOBAG.jpg",
    ],
    details: ["Uso cotidiano", "Linguagem urbana", "Produto de passeio", "Combina com camiseta e bandana"],
  },
  adesivos: {
    category: "Adesivos",
    title: "Pack de adesivos AUTSIDE",
    description:
      "Figurinhas do personagem, símbolos e frases da marca para espalhar o universo AUTSIDE em cadernos, garrafas e embalagens.",
    price: "R$ 24,90",
    images: [
      "MOCKUP/MOCKUP ADESIVOS.png",
    ],
    details: ["Personagem em várias poses", "Elementos gráficos da marca", "Fácil de colecionar", "Entrada acessível no universo AUTSIDE"],
  },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "guia";
const product = products[id] || products.guia;

document.title = `${product.title} | AUTSIDE`;
document.querySelector(".product-category").textContent = product.category;
document.querySelector(".product-title").textContent = product.title;
document.querySelector(".product-price").textContent = product.price;
document.querySelector(".product-description").textContent = product.description;

const hero = document.querySelector(".product-hero-image");
hero.src = product.images[0];
hero.alt = product.title;

const details = document.querySelector(".product-details");
details.innerHTML = product.details.map((item) => `<li>${item}</li>`).join("");

if (product.colors) {
  const colorOptions = document.createElement("div");
  colorOptions.className = "color-options";
  colorOptions.setAttribute("aria-label", "Opções de cor");
  colorOptions.innerHTML = `
    <strong>Cores disponíveis</strong>
    <div class="color-swatch-list">
      ${product.colors
        .map(
          (color) =>
            `<button type="button" style="--swatch:${color.value}" data-image="${color.image}" aria-label="Bandana ${color.name}"><span></span>${color.name}</button>`
        )
        .join("")}
    </div>
  `;
  details.before(colorOptions);

  colorOptions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      hero.src = button.dataset.image;
    });
  });
}

const thumbs = document.querySelector(".product-thumbs");
thumbs.innerHTML = product.images
  .map((src, index) => `<button type="button" aria-label="Ver imagem ${index + 1}"><img src="${src}" alt=""></button>`)
  .join("");

thumbs.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", () => {
    hero.src = product.images[index];
  });
});
