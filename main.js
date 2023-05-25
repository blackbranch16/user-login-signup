// USER LOGIN / SIGNUP

// TO BE DELETED LATER!!
document.getElementById("username").value = 's.siddiqui9';
document.getElementById("password").value = 'kitkat23';
document.getElementById("password-verification").value = 'kitkat24';

// HTML VARIABLES
let rawUsername = document.getElementById("username").value;
let rawPassword = document.getElementById('password').value;
let rawPasswordVerify = document.getElementById('password-verification').value;

// Stringified Variables
let username = JSON.stringify(rawUsername);
let password = JSON.stringify(rawPassword);
let passwordVerify = JSON.stringify(rawPasswordVerify);

let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let users = loadAllUsers();
// Global Variables


// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let newUsername = document.getElementById('username').value;
  let newPassword = document.getElementById('password').value;
  let newPasswordVerify = document.getElementById('password-verification').value;
  users.push(createUser(newUsername, newPassword, newPasswordVerify));
  console.log("users:", users);
  loadAllUsers();
  saveAllUsers();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}

// HELPER FUNCTIONS
function createUser(newUsername, newPassword, newPasswordVerify) {
    return {
      username: newUsername, 
      password: newPassword, 
      passwordVerify: newPasswordVerify,
    };
}

function saveAllUsers() {
  saveUsername();
  savePassword();
  savePasswordVerify();
}

function loadAllUsers() {
  return {
    username: loadUsername(), 
    password: loadPassword(), 
    passwordVerify: loadPasswordVerify(),
  };
}

function loadUsername() {
  let usersStr = localStorage.getItem("username");
  return JSON.parse(usersStr) ?? [];
}

function loadPassword() {
  let usersStr = localStorage.getItem("password");
  return JSON.parse(usersStr) ?? [];
}

function loadPasswordVerify() {
  let usersStr = localStorage.getItem("password-verification");
  return JSON.parse(usersStr) ?? [];
}

function saveUsername() {
  localStorage.setItem(username, JSON.stringify(users))
}

function savePassword() {
  localStorage.setItem(password, JSON.stringify(users))
}

function savePasswordVerify() {
  localStorage.setItem(passwordVerify, JSON.stringify(users))
}