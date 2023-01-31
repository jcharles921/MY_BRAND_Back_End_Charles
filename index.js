const form = document.getElementById("form");
const email = document.getElementById("Email");
const name = document.getElementById("Name");
const message = document.getElementById("message");
const out= document.getElementById("output");

form.addEventListener("click", function(event) {
    console.log("form")
  event.preventDefault();
  let isValid = true;

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value === "" || !emailRegex.test(email.value)) {
    isValid = false;
    email.style.borderColor = "red";
    out.innerHTML="Invalid Email ";
  } else {
    email.style.borderColor = "";
    out.innerHTML="";
  }

  if (name.value === "") {
    isValid = false;
    name.style.borderColor = "red";
  } else {
    name.style.borderColor = "";
  }

  if (message.value === "") {
    isValid = false;
    message.style.borderColor = "red";
  } else {
    message.style.borderColor = "";
  }

  if (isValid) {
    console.log("its submitted")
  }
})
function test(){
    console.log("Hello");
};
function submit(){
    console.log("its submitted")
}