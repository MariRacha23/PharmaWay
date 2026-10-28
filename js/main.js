let currentLang = "ka";

document.addEventListener("DOMContentLoaded", () => {
  renderMedicines(medicinesList);
  setupSearchAndFilter();
});

function changeLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll(".flag-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick").includes(lang)) {
      btn.classList.add("active");
    }
  });

  const mobileSelect = document.getElementById("mobileLangSelect");
  if (mobileSelect) {
    mobileSelect.value = lang;
  }

  updateTexts();
  renderMedicines(medicinesList);
  updateCategoryFilterOptions();
}

function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById("themeToggleBtn");

  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
}

function updateTexts() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
}

function renderMedicines(items) {
  const grid = document.getElementById("medicinesGrid");
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">მედიკამენტი ვერ მოიძებნა</p>`;
    return;
  }

  items.forEach((med) => {
    const card = document.createElement("div");
    card.style.cssText = `
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: border-color 0.3s, background 0.3s;
        `;

    const activeLabel =
      translations[currentLang].activeIngredientLabel || "აქტიური ნივთიერება";

    card.innerHTML = `
            <div>
                <div style="width: 100%; height: 160px; background: #ffffff; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; overflow: hidden; padding: 10px;">
                    <img src="${med.image}" alt="${med.name}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
                </div>
                <span style="font-size: 12px; color: var(--accent-color); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">${med.category[currentLang]}</span>
                <h3 style="font-size: 20px; margin: 8px 0; color: var(--text-main);">${med.name}</h3>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 10px;">${activeLabel}: <strong>${med.activeIngredient}</strong></p>
                <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 15px;">${med.description[currentLang]}</p>
            </div>
            <div style="border-top: 1px solid var(--card-border); margin-top: 15px; padding-top: 15px;">
                <span style="font-size: 13px; display: block; margin-bottom: 10px; color: var(--text-main);">${med.form[currentLang]}</span>
                <button onclick="alert('${med.indications[currentLang]}')" style="
                    width: 100%;
                    background: transparent;
                    border: 1px solid var(--accent-color);
                    color: var(--accent-color);
                    padding: 10px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: background 0.3s, color 0.3s;
                ">${translations[currentLang].detailsBtn || "ინსტრუქცია და შეძენა"}</button>
            </div>
        `;
    grid.appendChild(card);
  });
}

function setupSearchAndFilter() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  updateCategoryFilterOptions();

  const filterHandler = () => {
    const query = searchInput.value.toLowerCase();
    const selectedCat = categoryFilter.value;

    const filtered = medicinesList.filter((med) => {
      const matchesQuery =
        med.name.toLowerCase().includes(query) ||
        med.activeIngredient.toLowerCase().includes(query);
      const matchesCat =
        selectedCat === "" || med.category[currentLang] === selectedCat;
      return matchesQuery && matchesCat;
    });

    renderMedicines(filtered);
  };

  searchInput.addEventListener("input", filterHandler);
  categoryFilter.addEventListener("change", filterHandler);
}

function updateCategoryFilterOptions() {
  const categoryFilter = document.getElementById("categoryFilter");
  const currentSelected = categoryFilter.value;

  categoryFilter.innerHTML = `<option value="" data-i18n="allCategories">${translations[currentLang].allCategories}</option>`;

  const categories = [
    ...new Set(medicinesList.map((m) => m.category[currentLang])),
  ];
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    if (cat === currentSelected) {
      option.selected = true;
    }
    categoryFilter.appendChild(option);
  });
}

function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

function closeMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.remove("active");
}
