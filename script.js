(function(){
     emailjs.init("ymHPTxf4h-5Xzjwyy");  
  })();

const form = document.querySelector(".formulaire-contact");

  form.addEventListener("submit", envoiFormulaire)
  
  function envoiFormulaire(e) {
    e.preventDefault(); 

    const form = e.target; 

    emailjs.send("service_brhxx4z", "template_gryv95p", {
        nom: document.getElementById("nom").value,
        societe: document.getElementById("societe").value,
        adresse: document.getElementById("adresse").value,
        codeVille: document.getElementById("code-ville").value,
        email: document.getElementById("mail").value,
        telephone: document.getElementById("telephone").value,
        message: document.getElementById("message").value,
        date: new Date().toLocaleString('fr-FR') 
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

document.querySelectorAll("[class*='formation-btn-']").forEach(btn => {
    btn.addEventListener("click", showFormation)
})

function showFormation(e) {
    const classe = e.currentTarget.className
    console.log(classe)
    if(classe.includes("formation-btn-1")) {
        window.open("./ressources/prog-B12CR-2025.pdf", "_blank")
    } else if(classe.includes("formation-btn-2")) {
        window.open("./ressources/prog-H12C-2025.pdf", "_blank") 
    } else if (classe.includes("formation-btn-3")){
        window.open("./ressources/prog-RB12CR-2025.pdf", "_blank") 
    }
}

const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelector(".nav-links");
const navLinksLI = document.querySelectorAll(".nav-links li")

navToggler.addEventListener("click", toggleNav)

function toggleNav(){
  navLinks.classList.toggle("active");

  const expanded = navToggler.getAttribute("aria-expanded") === "true";
  navToggler.setAttribute("aria-expanded", !expanded);

  if(togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/cross.svg";
  }
  else {
    togglerImg.src = "ressources/hamburger.svg";
  }
}
navLinksLI.forEach( li => {
    li.addEventListener("click", fermerMenu)
})
function fermerMenu() {
    choisirAlma.classList.remove("active-logo")
    navLinks.classList.remove("active")
    togglerImg.src = "ressources/hamburger.svg"
    }
const almaLogo = document.querySelector(".logo")
const choisirAlma = document.querySelector(".choisir-alma")    
almaLogo.addEventListener("click", handleAlmaClick)

function handleAlmaClick() {
    choisirAlma.classList.toggle("active-logo")
}