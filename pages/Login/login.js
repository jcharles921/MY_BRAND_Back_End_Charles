const form= document.getElementById('send');
const email= document.getElementById('email');
const pass = document.getElementById('password');
const out_pass=document.getElementById('out_pass');
const out=document.getElementById('out');
const Supuser= "babouwitonze921@gmail.com";
const Suppass="12345"

// hamburger side navigation
const hamburgerButton = document.querySelector('.hambourger');
const hamburgerView = document.querySelector('.hamburger_view');
hamburgerButton.addEventListener('click', function() {
  hamburgerView.style.display = 'flex';
  hamburgerView.style.visibility = 'visible';
  hamburgerView.style.position = 'fixed';
});
const hamburgerButton_close = document.querySelector('.Flexer_2');
hamburgerButton_close.addEventListener('click', function() {
  hamburgerView.style.display = 'none';
  hamburgerView.style.visibility = 'none';
  hamburgerView.style.position = 'none';
});

//Getting elements from the local Storage

users = JSON.parse(localStorage.getItem('users')) || [];
//action to be done after validation of a form

function submit(){
  console.log("its submitted")
  const targetUser = users.find(user => user.email == email.value);
  if( email.value === Supuser && pass.value === Suppass){
    window.location.href = "/pages/Admin/admin.html";
    

  }

 else if(targetUser && targetUser.password == pass.value) {
    localStorage.setItem('currentUser', JSON.stringify(targetUser))

    window.location.href = "/pages/User/user.html";
    session();
    
    
  } else if(targetUser && targetUser.password != pass.value) {
    out_pass.innerHTML="Wrong Password !";
    // window.location.href = '../user/user.html';
  } else {
    // user doesn't exist
    out_pass.innerHTML="Not registered, go to signup?";
    
  }
}

//  valitation form



form.addEventListener("click", function(event) {
    console.log("clicked")
  event.preventDefault();
  let isValid = true;

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value === "" ) {
    isValid=false;
    out.innerHTML="Whoops, your email is missing";

  }
  else if(!emailRegex.test(email.value)) {
    isValid = false;
    out.innerHTML="Invalid Email ";
  
  }
  else {
    out.innerHTML="";
  }

  if (pass.value === "") {
    isValid = false;
    out_pass.innerHTML="Whoops, your password is missing";
  } else {
    out_pass.innerHTML="";
  }

  

  if (isValid) {
    submit();
  }
})

//current login user
function session(){
  let targetUser = users.find(user => user.email == email.value);
  let currentUser={
    name: targetUser.name,
    email:targetUser.value

  }
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

}