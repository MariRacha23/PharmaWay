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
    const instText = translations[currentLang].instructionBtn || "ინსტრუქცია";
    const downloadText = translations[currentLang].downloadBtn || "ჩამოტვირთვა";

    let pharmaciesHtml = "";
    if (med.pharmacies && med.pharmacies.length > 0) {
      const listItems = med.pharmacies
        .map(
          (p) =>
            `<li style="margin-bottom: 6px; font-size: 13px;"><strong>${p.name}:</strong> <span style="color: var(--text-muted);">${p.address}</span></li>`,
        )
        .join("");
      pharmaciesHtml = `
                <details style="margin-top: 12px; border: 1px solid var(--card-border); border-radius: 6px; padding: 8px 12px; background: var(--input-bg);">
                    <summary style="cursor: pointer; font-size: 13px; font-weight: 600; color: var(--accent-color); outline: none;">მოიძიეთ აფთიაქებში ▾</summary>
                    <ul style="margin: 8px 0 0 18px; padding: 0; color: var(--text-main);">
                        ${listItems}
                    </ul>
                </details>
            `;
    }

    card.innerHTML = `
            <div>
                <!-- მედიკამენტის ფოტო ახლო კადრით -->
                <div onclick='openImageModal("${med.image}", "${med.name}")' style="width: 100%; height: 180px; background: #ffffff; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; overflow: hidden; padding: 5px; cursor: pointer;" title="დააკლიკეთ სურათის გასადიდებლად">
                    <img src="${med.image}" alt="${med.name}" style="max-height: 100%; max-width: 100%; object-fit: contain; transform: scale(1.08); transition: transform 0.3s;">
                </div>
                
                <span style="font-size: 12px; color: var(--accent-color); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">${med.category[currentLang]}</span>
                
                <h3 style="font-size: 20px; margin: 8px 0; color: var(--text-main);">${med.name}</h3>
                <span style="font-size: 13px; display: block; margin-bottom: 10px; color: var(--text-main);">${med.form[currentLang]}</span>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">${activeLabel}: <strong>${med.activeIngredient}</strong></p>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 6px;">მწარმოებელი: <strong>${med.country[currentLang]}</strong></p>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">გაცემის ფორმა: <strong style="color: var(--accent-color);">${med.prescriptionType[currentLang]}</strong></p>
                
                <!-- მოკლე აღწერა -->
                <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5; background: var(--input-bg); padding: 10px; border-radius: 6px; border: 1px solid var(--card-border);">
                    ${med.description[currentLang]}
                </p>
                
                <!-- აფთიაქების ჩამოსაშლელი სია -->
                ${pharmaciesHtml}
            </div>
            
            <div style="border-top: 1px solid var(--card-border); margin-top: 15px; padding-top: 15px;">
                
                
                <div style="display: flex; gap: 8px;">
                    <button onclick='openAnnotationModal("${med.name}", "${med.annotationFile}")' style="
                        flex: 1;
                        text-align: center;
                        background: transparent;
                        border: 1px solid var(--accent-color);
                        color: var(--accent-color);
                        padding: 10px 8px;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 13px;
                        transition: background 0.3s, color 0.3s;
                    ">${instText}</button>

                    <a href="${med.annotationFile || "#"}" download style="
                        background: var(--accent-color);
                        border: 1px solid var(--accent-color);
                        color: #0c0c0e;
                        padding: 10px 12px;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 700;
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        transition: opacity 0.3s;
                    " title="${downloadText}">📥</a>
                </div>
            </div>
        `;
    grid.appendChild(card);
  });
}

function openAnnotationModal(medName, pdfPath) {
  if (window.innerWidth <= 768) {
    window.open(pdfPath, "_blank");
    return;
  }

  const modal = document.getElementById("annotationModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = `${medName} — სრული ანოტაცია`;
  modalBody.innerHTML = `
        <iframe src="${pdfPath}" style="width: 100%; height: 100%; border: none;"></iframe>
    `;

  modal.style.display = "flex";
}

function closeAnnotationModal() {
  const modal = document.getElementById("annotationModal");
  modal.style.display = "none";
  document.getElementById("modalBody").innerHTML = "";
}

function openAnnotationModal(medName, pdfPath) {
  if (window.innerWidth <= 768) {
    window.open(pdfPath, "_blank");
    return;
  }

  const modal = document.getElementById("annotationModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = `${medName} — სრული ანოტაცია`;
  modalBody.innerHTML = `
        <iframe src="${pdfPath}" style="width: 100%; height: 100%; border: none;"></iframe>
    `;

  modal.style.display = "flex";
}

function closeAnnotationModal() {
  const modal = document.getElementById("annotationModal");
  modal.style.display = "none";
  document.getElementById("modalBody").innerHTML = "";
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

function openImageModal(imgSrc, medName) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalImageTitle");

  modalImg.src = imgSrc;
  modalTitle.textContent = medName;
  modal.style.display = "flex";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.getElementById("modalImage").src = "";
}

window.addEventListener("click", function (event) {
  const imgModal = document.getElementById("imageModal");
  if (event.target === imgModal) {
    closeImageModal();
  }
});

function sendEmail(event) {
  event.preventDefault();

  const btn = document.getElementById("submitBtn");
  const originalText = btn.textContent;
  btn.textContent = "იგზავნება...";
  btn.disabled = true;

  const serviceID = "service_h1k4rsp";
  const templateID = "template_f68dei2";

  const templateParams = {
    name: document.getElementById("userName").value,
    email: document.getElementById("userEmail").value,
    message: document.getElementById("userMessage").value,
    to_email: "info@llcsaba.ge",
  };

  emailjs.send(serviceID, templateID, templateParams).then(
    () => {
      alert("შეტყობინება წარმატებით გაიგზავნა! მალე გიპასუხებთ.");
      document.getElementById("contactForm").reset();
      btn.textContent = originalText;
      btn.disabled = false;
    },
    (err) => {
      alert("გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.");
      console.error("EmailJS Error:", err);
      btn.textContent = originalText;
      btn.disabled = false;
    },
  );
}
