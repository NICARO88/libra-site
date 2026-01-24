(() => {
  const form = document.getElementById("contactForm");
  const successBox = document.getElementById("contactFormSuccess");
  const resetBtn = document.getElementById("contactFormResetBtn");
  const iframe = document.getElementById("hidden_iframe");

  if (!form || !successBox || !iframe) return;

  let submitted = false;

  const hardResetForm = () => {
    form.reset();
    [...form.elements].forEach((el) => {
      if (el && "value" in el) el.value = "";
    });
  };

  const showSuccess = () => {
    hardResetForm();
    form.style.display = "none";
    successBox.style.display = "block";
    submitted = false; // reseteamos flag para próximos envíos
  };

  const showFormEmpty = () => {
    successBox.style.display = "none";
    form.style.display = "block";
    hardResetForm();
  };

  // Al entrar o volver (bfcache), siempre muestra el form vacío
  window.addEventListener("pageshow", () => {
    showFormEmpty();
  });

  form.addEventListener("submit", () => {
    // marcamos que hubo submit; el iframe disparará "load" cuando vuelva Formspree
    submitted = true;
  });

  iframe.addEventListener("load", () => {
    // El iframe carga también al inicio: solo actuamos si venimos de un submit real
    if (!submitted) return;
    showSuccess();
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      showFormEmpty();
      const first = form.querySelector("input, textarea");
      if (first) first.focus();
    });
  }
})();
