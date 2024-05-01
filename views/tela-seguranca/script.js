function showApprovalModal() {
  document.getElementById('modalContainer').style.display = 'none';
  document.getElementById('modalApproval').style.display = 'block';
}

function showDenialModal() {
  document.getElementById('modalContainer').style.display = 'none';
  document.getElementById('modalDenial').style.display = 'block';
}

function closeModal() {
  document.getElementById('modalContainer').style.display = 'none';
}

function closeModalApproval() {
  document.getElementById('modalApproval').style.display = 'none';
}

function closeModalDenial() {
  document.getElementById('modalDenial').style.display = 'none';
}


function showLoginOptions() {
  var loginOptions = document.getElementById('loginOptions');
  if (loginOptions.style.display === 'block') {
    loginOptions.style.display = 'none';
  } else {
    loginOptions.style.display = 'block';
  }
}

function logout() {
}
