const form = document.getElementById('loginform');
trigger = new Boolean(true);

form.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {  
    if (trigger) {
      e.preventDefault();
      trigger = Boolean(false);
      next();
    } else {
      document.forms["loginform"].submit();
    }
  }
});

function hideLogin() {
  var element = document.getElementById("login-div");
  element.classList.add("hiddenAnimation");
}

function showPassword() {
  document.getElementById("login-div").hidden = true;
  var passwordinput = document.getElementById("password-input");
  var passworddiv = document.getElementById("password-div");
  passworddiv.hidden = false;
  passworddiv.classList.add("visibleAnimation");
  passwordinput.focus();
}

function next() {
  var username = document.getElementById("i0116").value;
  document.getElementById("displayName").innerHTML = username;
  hideLogin()
  setTimeout(showPassword, 2000)
}