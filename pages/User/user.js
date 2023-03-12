const picture= document.getElementById('Profile_picture');
const welcome= document.getElementById('welcome');
const out_list=document.getElementById('out_list');




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
// let users=JSON.parse(localStorage.getItem('users'));

// const storedPic= new Image();
// storedPic.src=userinfo.image;


// console.log(userinfo)


function displayUsers(){
  let token=document.cookie.split('=')[1];
  console.log(token)
  fetch('http://localhost:5000/api/v1/Signup',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `${token}`

    }

  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    // localStorage.setItem('users', JSON.stringify(response.data));
    // users=JSON.parse(localStorage.getItem('users'));
    // console.log(users)
    response.data.forEach(element => {
      out_list.innerHTML+=`<div> <li>${element.username.split(' ')[0]} <img src="/assets/images/Icon_profile.svg" alt=""></li>
      </div> `
    });
  }
  )
  

  




}





window.onload=()=>{
    // if(userinfo.image=== null){
    //     picture.src="/assets/images/Icon_profile.svg"
    // }
    // else{
    //     picture.src= storedPic;
    // }
    welcome.innerHTML=userinfo.data.name;
    displayUsers();
    // for(i=0;i<users.length;i++){
    //   out_list.innerHTML=`<div> <li>${users[i].name.split(' ')[0]} <img src="/assets/images/Icon_profile.svg" alt=""></li>
    //   </div> `

    // }
    // users.forEach(element => {
    //   console.log(element.name)
      
    // });
}