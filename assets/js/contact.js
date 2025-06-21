const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop form from refreshing page
    const button = contactForm.querySelector('button[type="submit"]');
    button.innerText = "Sending...";
    setTimeout(() => {
      button.innerText = "Send Message";
    }, 800);
  });
}
