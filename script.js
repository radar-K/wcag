// funktion för att öppna/stänga
function toggleModal(content, button, closeBtn) {
    content.classList.toggle("show"); 
    let openStateString = button.getAttribute("aria-expanded"); 
    let openStateBool = openStateString === "true"; 
    button.setAttribute("aria-expanded", `${!openStateBool}`);
  
    if (content.classList.contains("show")) {
      closeBtn.focus();  // Flytta fokus tillbaka till öppningsknappen om knappen stängs
    } else {
      button.focus();
    }
  }
  
  // Funktion för att stänga modulen med Escape-tangenten
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (contentBtn2.classList.contains("show")) {
        toggleModal(contentBtn2, headerBtn2, closeBtn2);
      }
      if (contentBtn1.classList.contains("show")) {
        toggleModal(contentBtn1, headerBtn1, closeBtn);
      }
    }
  });
  
  // --- Uppgift 1 ---
  const headerBtn1 = document.getElementById("popBtn");
  const contentBtn1 = document.getElementById("accessibleModal");
  const closeBtn = document.getElementById("closeModalBtn");
  
  headerBtn1.addEventListener("click", () => toggleModal(contentBtn1, headerBtn1, closeBtn));
  closeBtn.addEventListener("click", () => toggleModal(contentBtn1, headerBtn1, closeBtn));
  
  // --- Uppgift 2 ---
  const headerBtn2 = document.getElementById("popBtn2");
  const contentBtn2 = document.getElementById("accessibleDialog");
  const closeBtn2 = document.getElementById("closeDialogBtn");
  
  headerBtn2.addEventListener("click", () => toggleModal(contentBtn2, headerBtn2, closeBtn2));
  closeBtn2.addEventListener("click", () => toggleModal(contentBtn2, headerBtn2, closeBtn2));
  
  // --- Uppgift 3 (Hamburgermeny) ---
  const hamburger = document.getElementById("menuButton");
  const hamburgerContent = document.getElementById("menuContent");
  
  hamburger.addEventListener("click", () => {
    hamburgerContent.classList.toggle("show"); // Enklare toggle utan aria-expanded
  });
  