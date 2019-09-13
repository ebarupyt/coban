function login() {
  let username, password;

  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  if (username == "eduardo" && password == "barrios") {
    window.location.href("index.html");
  } else {
    console.log("OTRO USUARIO");
  }
}
