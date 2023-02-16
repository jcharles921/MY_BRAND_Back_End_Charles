const picture= document.getElementById('Profile_picture');
const welcome= document.getElementById('welcome');




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

//session user information 
let userinfo= JSON.parse(localStorage.getItem('currentUser'));
const storedPic= new Image();
storedPic.src=userinfo.image;


console.log(userinfo)
window.onload=()=>{
    // if(userinfo.image=== null){
    //     picture.src="/assets/images/Icon_profile.svg"
    // }
    // else{
    //     picture.src= storedPic;
    // }
    welcome.innerHTML=userinfo.name;
}