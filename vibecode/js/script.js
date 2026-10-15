"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const menuLabel = menuToggle.querySelector(".visually-hidden");
const mainNav = document.querySelector("#main-nav");
const filterButtons = document.querySelectorAll("[data-filter]");
const navFilterLinks = document.querySelectorAll("[data-nav-filter]");
const productCards = document.querySelectorAll(".product-card");
const productStatus = document.querySelector("#product-status");
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector("#site-search");
const bagButton = document.querySelector(".bag-button");
const bagCount = document.querySelector(".bag-count");
const bagPanel = document.querySelector("#bag-panel");
const bagClose = document.querySelector(".bag-close");
const bagItems = document.querySelector(".bag-items");
const bagEmpty = document.querySelector(".bag-empty");
const bagSummary = document.querySelector(".bag-summary");
const bagSubtotal = document.querySelector(".bag-subtotal");
const bagClear = document.querySelector(".bag-clear");
const toast = document.querySelector(".toast");
const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");

let activeCategory = "todos";
let searchTerm = "";
const bag = new Map();
let toastTimer;
const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
}

function updateProducts() {
  let visibleProducts = 0;

  productCards.forEach((card) => {
    const matchesCategory =
      activeCategory === "todos" || card.dataset.category === activeCategory;
    const matchesSearch = normalizeText(card.textContent).includes(searchTerm);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleProducts += 1;
  });

  productStatus.hidden = visibleProducts > 0;
  productStatus.textContent =
    visibleProducts === 0 ? "Nenhum produto encontrado nesta seleção." : "";
}

function setActiveCategory(category) {
  activeCategory = category;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateProducts();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function setBagOpen(isOpen) {
  bagPanel.hidden = !isOpen;
  bagButton.setAttribute("aria-expanded", String(isOpen));
  bagButton.setAttribute(
    "aria-label",
    isOpen
      ? "Fechar nécessaire"
      : `Abrir nécessaire com ${bagCount.textContent} ${bagCount.textContent === "1" ? "item" : "itens"}`,
  );
}

function renderBag() {
  bagItems.replaceChildren();

  let itemCount = 0;
  let subtotal = 0;

  bag.forEach((item, name) => {
    itemCount += item.quantity;
    subtotal += item.price * item.quantity;

    const row = document.createElement("li");
    row.className = "bag-item";

    const itemName = document.createElement("span");
    itemName.className = "bag-item-name";
    itemName.textContent = name;

    const itemPrice = document.createElement("span");
    itemPrice.className = "bag-item-price";
    itemPrice.textContent = currency.format(item.price * item.quantity);

    const itemActions = document.createElement("div");
    itemActions.className = "bag-item-actions";

    const quantity = document.createElement("span");
    quantity.textContent = `Quantidade: ${item.quantity}`;

    const removeButton = document.createElement("button");
    removeButton.className = "bag-remove";
    removeButton.type = "button";
    removeButton.dataset.removeProduct = name;
    removeButton.textContent = "Remover 1";
    removeButton.setAttribute("aria-label", `Remover uma unidade de ${name}`);

    itemActions.append(quantity, removeButton);
    row.append(itemName, itemPrice, itemActions);
    bagItems.append(row);
  });

  bagCount.textContent = String(itemCount);
  bagEmpty.hidden = itemCount > 0;
  bagSummary.hidden = itemCount === 0;
  bagSubtotal.textContent = currency.format(subtotal);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveCategory(button.dataset.filter);
  });
});

navFilterLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveCategory(link.dataset.navFilter);
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuLabel.textContent = "Abrir menu";
  });
});

searchInput.addEventListener("input", () => {
  searchTerm = normalizeText(searchInput.value.trim());
  updateProducts();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#produtos").scrollIntoView({ behavior: "smooth" });
});

productCards.forEach((card) => {
  const addButton = card.querySelector(".add-button");

  addButton.addEventListener("click", () => {
    const name = addButton.dataset.product;
    const price = Number(addButton.dataset.price);
    const item = bag.get(name) ?? { price, quantity: 0 };

    item.quantity += 1;
    bag.set(name, item);
    renderBag();
    setBagOpen(true);
    showToast(`${addButton.dataset.product} adicionado à nécessaire de demonstração.`);
  });
});

bagButton.addEventListener("click", () => {
  setBagOpen(bagPanel.hidden);
});

bagClose.addEventListener("click", () => {
  setBagOpen(false);
  bagButton.focus();
});

bagItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-product]");
  if (!removeButton) return;

  const item = bag.get(removeButton.dataset.removeProduct);
  if (!item) return;

  item.quantity -= 1;
  if (item.quantity === 0) {
    bag.delete(removeButton.dataset.removeProduct);
  }

  renderBag();
});

bagClear.addEventListener("click", () => {
  bag.clear();
  renderBag();
});

document.addEventListener("click", (event) => {
  if (
    !bagPanel.hidden &&
    !bagPanel.contains(event.target) &&
    !bagButton.contains(event.target) &&
    !event.target.closest(".add-button")
  ) {
    setBagOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !bagPanel.hidden) {
    setBagOpen(false);
    bagButton.focus();
  }
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mainNav.classList.toggle("is-open", !isExpanded);
  menuLabel.textContent = isExpanded ? "Abrir menu" : "Fechar menu";
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Obrigada! Este formulário é apenas uma demonstração e não enviou seus dados.";
  newsletterForm.reset();
});

renderBag();
