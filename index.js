// collecting document elements

const form = document.getElementById("form");
const email = document.getElementById("Email");
const ton_nom = document.getElementById("Name");
const message = document.getElementById("message");
const out= document.getElementById("output_email");
const out_name=document.getElementById("output_name");
const out_message=document.getElementById("output_message");

//action to be done after validation of a form
function submit(){
  console.log("its submitted");
  let allQueries=JSON.parse(localStorage.getItem("allQueries")) || [];
  let currentTime = new Date();
  // time = currentTime.getTime();
  // hours = currentTime.getHours();
  let theQuery={
    email: email.value,
    ton_nom: ton_nom.value,
    message: message.value,
    time: currentTime
  }
  allQueries.push(theQuery);
  console.log(theQuery);
  localStorage.setItem("allQueries", JSON.stringify(allQueries));
  email.value="";
  ton_nom.value="";
  message.value="";
}

//  valitation form
form.addEventListener("click", function(event) {
    console.log("form")
  event.preventDefault();
  let isValid = true;

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value === "" ) {
    isValid=false;
    email.style.borderColor = "white";
    out.innerHTML="You must fill your email !!";

  }
  else if(!emailRegex.test(email.value)) {
    isValid = false;
    email.style.borderColor = "white";
    out.innerHTML="Invalid Email ";
  
  }
  else {
    email.style.borderColor = "";
    out.innerHTML="";
  }

  if (ton_nom.value === "") {
    isValid = false;
    ton_nom.style.borderColor = "white";
    out_name.innerHTML="You must fill your name !!";
  } else {
    ton_nom.style.borderColor = "";
    out_name.innerHTML="";
  }

  if (message.value === "") {
    isValid = false;
    message.style.borderColor = "white";
    out_message.innerHTML="You must fill your message !!";
  } else {
    message.style.borderColor = "";
    out_message.innerHTML="";
  }

  if (isValid) {
    submit();
  }
})

//tablet and  mobile navigation
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


//Live demo on work done not working by the way
// const live =document.querySelectorAll('work_done');
// live.forEach((img,i)=>{
//         img.addEventListener('mouseenter',()=>{
//           console.log("sommething")
//         live[i].classList.add('liver');
//         })
//         img.addEventListener('mouseleave',()=>{
//           live[i].classList.remove('liver');

//         })
        
// })

