// ===============================
// KisanConnect Diagnosis
// Part 1 - Setup & Language Logic
// ===============================

// Shortcut
const $ = (id) => document.getElementById(id);

// Update all static text based on selected language
function updateLanguage() {
    $("splashText").textContent = getLanguageText("splash");
    $("startBtn").textContent = getLanguageText("start");

    $("homeTitle").textContent = getLanguageText("welcome");
    $("homeSubtitle").textContent = getLanguageText("chooseCrop");
    $("goCrop").textContent = getLanguageText("continue");

    $("cropTitle").textContent = getLanguageText("cropSelection");
    $("diseaseTitle").textContent = getLanguageText("diseaseSelection");
    $("recommendationTitle").textContent = getLanguageText("recommendation");
    $("companyListTitle").textContent = getLanguageText("companies");
    $("companyDetailsTitle").textContent = getLanguageText("companyDetails");
    $("companyButton").textContent = getLanguageText("viewCompanies");
}

// Change application language
function setLanguage(lang) {
    currentLanguage = lang;
    updateLanguage();
}

// Language button events
document.addEventListener("DOMContentLoaded", () => {

    updateLanguage();

    document.querySelectorAll(".language-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            setLanguage(btn.dataset.lang);
            showScreen("screenHome");

        });

    });

});
// ===============================
// Part 2 - Navigation & Crop List
// ===============================

// Splash -> Language
$("startBtn").addEventListener("click", () => {
    showScreen("screenLanguage");
});

// Home -> Crop Selection
$("goCrop").addEventListener("click", () => {
    renderCrops();
    showScreen("screenCrop");
});

// Render all crop cards
function renderCrops() {

    const container = $("cropContainer");
    container.innerHTML = "";

    CROPS.forEach(crop => {

        container.innerHTML += `
        <div class="col-6">
            <div class="card crop-card h-100"
                 onclick="selectCrop('${crop.id}')">
                <img src="${crop.image}" alt="${getCropName(crop)}">
                <div class="card-body">
                    <h6 class="card-title">${getCropName(crop)}</h6>
                </div>
            </div>
        </div>`;
    });
}

// Handle crop selection
function selectCrop(cropId) {

    selectedCrop = cropId;

    renderDiseases(cropId);

    showScreen("screenDisease");
}
// ===============================
// Part 3 - Disease List & Recommendation
// ===============================

// Render diseases for selected crop
function renderDiseases(cropId) {

    const container = $("diseaseContainer");
    container.innerHTML = "";

    const diseases = getDiseasesByCrop(cropId);

    diseases.forEach(disease => {

        container.innerHTML += `
        <div class="col-6">
            <div class="card disease-card h-100"
                 onclick="selectDisease('${disease.id}')">
                <img src="${disease.image}" alt="${getDiseaseName(disease)}">
                <div class="card-body">
                    <h6 class="card-title">${getDiseaseName(disease)}</h6>
                </div>
            </div>
        </div>`;
    });
}

// Handle disease selection
function selectDisease(diseaseId) {

    const disease = getDiseasesByCrop(selectedCrop)
        .find(d => d.id === diseaseId);

    selectedDisease = disease;

    renderRecommendation();

    showScreen("screenRecommendation");
}

// Display fertilizer & pesticide recommendation
function renderRecommendation() {

    $("recommendationContent").innerHTML = `
        <div class="recommendation-box">
            <img src="${selectedDisease.image}" alt="${getDiseaseName(selectedDisease)}">

            <h4>${getDiseaseName(selectedDisease)}</h4>

            <p><strong>${getLanguageText("fertilizer")}:</strong><br>
            ${selectedDisease.fertilizer}</p>

            <p><strong>${getLanguageText("pesticide")}:</strong><br>
            ${selectedDisease.pesticide}</p>
        </div>
    `;
}
// ===============================
// Part 4 - Companies & Details
// ===============================

// Recommendation -> Company List
$("companyButton").addEventListener("click", () => {
    renderCompanies();
    showScreen("screenCompanies");
});

// Display company list
function renderCompanies() {

    const list = $("companyList");
    list.innerHTML = "";

    selectedDisease.companies.forEach(companyId => {

        const company = getCompany(companyId);

        list.innerHTML += `
        <button
            class="list-group-item list-group-item-action company-item"
            onclick="selectCompany('${company.id}')">

            <strong>${company.name}</strong><br>
            <small>${company.product}</small>

        </button>`;
    });
}

// Handle company selection
function selectCompany(companyId) {

    selectedCompany = getCompany(companyId);

    $("companyDetails").innerHTML = `
        <div class="company-card">

            <h4>${selectedCompany.name}</h4>

            <p><strong>Product:</strong> ${selectedCompany.product}</p>

            <p><strong>${getLanguageText("phone")}:</strong>
                ${selectedCompany.phone}</p>

            <p><strong>${getLanguageText("email")}:</strong>
                ${selectedCompany.email}</p>

            <p><strong>${getLanguageText("website")}:</strong><br>
                <a href="${selectedCompany.website}" target="_blank">
                    ${selectedCompany.website}
                </a>
            </p>

            <a href="tel:${selectedCompany.phone.replace(/\s+/g,'')}"
               class="btn btn-success call-btn">
                ${getLanguageText("callCompany")}
            </a>

        </div>
    `;

    showScreen("screenCompanyDetails");
}
// ===============================
// Part 5 - Initialization
// ===============================

// Initialize application
document.addEventListener("DOMContentLoaded", () => {

    // Set initial language text
    updateLanguage();

    // Ensure the correct first screen is visible
    showScreen("screenSplash");

    // Reset selections
    selectedCrop = null;
    selectedDisease = null;
    selectedCompany = null;
});

// Optional helper to restart the flow
function resetApp() {
    selectedCrop = null;
    selectedDisease = null;
    selectedCompany = null;

    $("cropContainer").innerHTML = "";
    $("diseaseContainer").innerHTML = "";
    $("recommendationContent").innerHTML = "";
    $("companyList").innerHTML = "";
    $("companyDetails").innerHTML = "";

    updateLanguage();
    showScreen("screenHome");
}