document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.contact-form");
  if (!form) return;
  const submitBtn = form.querySelector('button[type="submit"]');
  const statusEl = form.querySelector("[data-form-status]");
  const captchaEl = form.querySelector(".cf-turnstile");

  const setStatus = (message, isError = false) => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.style.color = isError ? "#b42318" : "";
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    // Simple bot trap: legitimate users never fill this hidden field.
    const trap = form.querySelector('input[name="website"]');
    if (trap && trap.value.trim() !== "") return;

    const formData = new FormData(form);
    const token = formData.get("cf-turnstile-response");

    if (!token) {
      setStatus("Please complete the security check before submitting.", true);
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    setStatus("Sending...");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      form.reset();
      setStatus("Message sent. Thank you.");

      // Reset Turnstile so the next submit starts fresh.
      if (window.turnstile && captchaEl) {
        window.turnstile.reset(captchaEl);
      }
    } catch (error) {
      setStatus(error.message || "Something went wrong. Please try again.", true);
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
});

