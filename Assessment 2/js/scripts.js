// Simple booking form validation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const messageEl = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    messageEl.textContent = "";
    messageEl.style.color = "#cc0000";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const date = form.preferredDate.value;
    const time = form.preferredTime.value;
    const service = form.service.value;

    let errors = [];

    if (!firstName) {
      errors.push("First name is required.");
    }
    if (!lastName) {
      errors.push("Last name is required.");
    }
    if (!email) {
      errors.push("Email is required.");
    } else {
      // Basic email pattern
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
      }
    }
    if (!phone) {
      errors.push("Phone is required.");
    }
    if (!date) {
      errors.push("Please choose a preferred date.");
    }
    if (!time) {
      errors.push("Please choose a preferred time.");
    }
    if (!service) {
      errors.push("Please select a reason for your visit.");
    }

    if (errors.length > 0) {
      event.preventDefault();
      messageEl.innerHTML = errors.join("<br>");
    } else {
      event.preventDefault();
      messageEl.style.color = "#006600";
      messageEl.textContent = "Thank you. Your booking request has been recorded.";
      form.reset();
    }
  });
});
