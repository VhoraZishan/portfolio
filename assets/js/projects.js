console.log("projects.js loaded");

setTimeout(() => {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const desc = btn.closest(".project-content").querySelector(".project-desc");
      const shortText = desc.querySelector(".short-text");
      const fullText = desc.querySelector(".full-text");

      const isExpanded = fullText.classList.contains("expanded");

      if (isExpanded) {
        fullText.classList.remove("expanded");
        shortText.style.display = "inline";
        btn.textContent = "Read More";
      } else {
        fullText.classList.add("expanded");
        shortText.style.display = "none";
        btn.textContent = "Show Less";
      }
    });
  });
}, 50); // small delay to ensure DOM is ready
