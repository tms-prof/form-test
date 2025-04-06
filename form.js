document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const scriptURL = "https://script.google.com/macros/s/SEU_SCRIPT_URL/exec"; // Substitua pela URL do seu Web App

    fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams(data),
    })
      .then((response) => alert("Dados enviados com sucesso!"))
      .catch((error) => console.error("Erro:", error));
  });
