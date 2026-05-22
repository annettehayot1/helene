(function () {
  emailjs.init("ymHPTxf4h-5Xzjwyy");
})();

const form = document.querySelector(".formulaire-contact");

form.addEventListener("submit", envoiFormulaire);

function envoiFormulaire(e) {
  e.preventDefault();

  const form = e.target;

  emailjs
    .send("service_brhxx4z", "template_gryv95p", {
      nom: document.getElementById("nom").value,
      societe: document.getElementById("societe").value,
      adresse: document.getElementById("adresse").value,
      codeVille: document.getElementById("code-ville").value,
      email: document.getElementById("mail").value,
      telephone: document.getElementById("telephone").value,
      message: document.getElementById("message").value,
      date: new Date().toLocaleString("fr-FR"),
    })
    .then(() => {
      alert("Merci ! Votre message a bien été envoyé.");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi du message.");
    });
}

document.querySelectorAll("[class*='formation-btn-']").forEach((btn) => {
  btn.addEventListener("click", showFormation);
});

function showFormation(e) {
  const classe = e.currentTarget.className;
  if (classe.includes("formation-btn-1")) {
    window.open("./ressources/prog-B12CR-2025.pdf", "_blank");
  } else if (classe.includes("formation-btn-2")) {
    window.open("./ressources/prog-H12C-2025.pdf", "_blank");
  } else if (classe.includes("formation-btn-3")) {
    window.open("./ressources/prog H0B0 2022.pdf", "_blank");
  }
}

const pourQui = document.querySelector(".pour-qui");
pourQui.addEventListener("click", handlePourQuiClick);

function handlePourQuiClick() {
  window.open("./ressources/pourqui.pdf", "_blank");
}
const certificatQualiopi = document.querySelector(".certificat");
certificatQualiopi.addEventListener("click", handleCertifcatClick);

function handleCertifcatClick() {
  window.open("./ressources/certificate_Qualiopi_2025.pdf", "_blank");
}

const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelector(".nav-links");
const navLinksLI = document.querySelectorAll(".nav-links li");

navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navLinks.classList.toggle("active");

  const expanded = navToggler.getAttribute("aria-expanded") === "true";
  navToggler.setAttribute("aria-expanded", !expanded);

  if (togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/cross.svg";
  } else {
    togglerImg.src = "ressources/hamburger.svg";
  }
}
navLinksLI.forEach((li) => {
  li.addEventListener("click", fermerMenu);
});
function fermerMenu() {
  const choisirAlma = document.querySelector(".choisir-alma");
  choisirAlma.classList.remove("active-logo");
  navLinks.classList.remove("active");
  togglerImg.src = "ressources/hamburger.svg";
}
const almaLogo = document.querySelector(".logo");
almaLogo.addEventListener("click", handleAlmaClick);

function handleAlmaClick() {
  const choisirAlma = document.querySelector(".choisir-alma");
  const backgroundLayer = document.querySelector(".background-layer");
  backgroundLayer.classList.toggle("hidden");
  choisirAlma.classList.toggle("active-logo");
}
const reglement = document.querySelector(".reglement");
const contexteReglementaire = document.querySelector(".contexte-reglementaire");

reglement.addEventListener("click", handleReglementClick);

function handleReglementClick() {
  contexteReglementaire.classList.toggle("active-reglement");
}
const backgroundLayer = document.querySelector(".background-layer");
backgroundLayer.addEventListener("click", handleAlmaClick);

const sections = document.querySelectorAll("section, header");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", activeMenuOnScroll);

// Active le menu dès le chargement
activeMenuOnScroll();


function activeMenuOnScroll() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navAnchors.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href").replace("#", "");

    // Formation NFC 18-510 reste actif aussi sur Certification
    if (
      href === currentSection ||
      (currentSection === "certification" && href === "habilitation")
    ) {
      link.classList.add("active");
    }
  });
}