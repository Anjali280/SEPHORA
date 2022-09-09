var user;

function register() {
  let pref = document.getElementById("prefix").value;
  let nm = document.getElementById("nm").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  let phone = document.getElementById("phone").value;

  let users = [];

  users = JSON.parse(localStorage.getItem("user_array")) || [];

  let user_obj = {
    pref: pref,
    name: nm,
    email: email,
    password: pwd,
    mobile: phone,
  };

  users.push(user_obj);

  localStorage.setItem("user_array", JSON.stringify(users));

  const myForm = document.getElementById("createAcc");
  myForm.reset();
  window.location.href="../index.html";
  alert(user_obj.name+"! Your account has been created");
}

function login() {
  event.preventDefault();
  let username = document.getElementById("username").value;

  let users = [];

  users = JSON.parse(localStorage.getItem("user_array")) || [];

  let flag = 0;

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === username || users[i].mobile === username) {
      user = users[i];
      localStorage.setItem("user", JSON.stringify(user));
      flag = 1;
      window.location.href = "password.html";
      break;
    }
  }

  if (flag === 0) {
    window.location.href = "account.html";
  }

  const myForm = document.getElementById("verifyUser");
  myForm.reset();
}

function auth() {
  event.preventDefault();
  let user = JSON.parse(localStorage.getItem("user"));
  localStorage.removeItem("user");

  let pwd = document.getElementById("pwd").value;

  if (user.password === pwd) {
    window.location.href="../index.html";
    
    alert("Welcome " + user.name + "!!, You are logged in successfully");
  } else {
    window.location.href = "login.html";
    alert("Wrong password, Login Again");
  }

  const myForm = document.getElementById("pwdd");
  myForm.reset();
}
