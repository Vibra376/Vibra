document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission on Submit page
  const form = document.getElementById("storyForm");
  const message = document.getElementById("formMessage");

  if (form && message) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "🎉 Thank you for submitting your story!";
      message.style.color = "green";
      form.reset();
    });
  }

  // FAQ Toggle Function
  const faqs = document.querySelectorAll("main h4");
  faqs.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
