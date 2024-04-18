function validarEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
      alert("Por favor, insira um email válido.");
      return false;
    }
    return true;
  }