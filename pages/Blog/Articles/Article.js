const hamburgerButton = document.querySelector('.hambourger');
const hamburgerView = document.querySelector('.hamburger_view');
const out_title= document.getElementById('out_title');
const out_date= document.getElementById('out_date');
const out_text= document.getElementById('out_text');

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
let arrarticle=[];

pageArray=JSON.parse(localStorage.getItem('pageArray')) || [];
window.onload=()=>{
  let currentUser=localStorage.getItem('currentUser');
    if(currentUser){
    document.getElementById('log_B').innerHTML="Logout";
    
  }
if(pageArray!==[]){
  out_date.innerHTML+=`${pageArray[0].date}`;
  out_text.innerHTML+=`${pageArray[0].text}`;
  out_title.innerHTML+=`${pageArray[0].title}`;
  var currentPage={
  date:pageArray[0].date,
  text:pageArray[0].text,
  title:pageArray[0].title,
  id: pageArray[0].id
  }
  
  arrarticle.push(currentPage);

  
}
// display();
  // pageArray=[]
  // localStorage.setItem('pageArray', JSON.stringify(pageArray));
}
// DISPLAY FROM LOCALSTORAGE
const out_thecomment=document.getElementById('out_thecomment')
function display(){
  let temp = arrarticle[0].id
  console.log(temp)
  
    for(i=0;i<posts[temp].comments.length;i++){
      out_thecomment.innerHTML+=` 
      <div class="the_comment" >
      <p>${posts[temp].comments[i].name}</p>
      <div >${posts[temp].comments[i].message}
      </div>
    </div>`
    }

  






}









posts=JSON.parse(localStorage.getItem('post')) || [];
// var anid=arrarticle[0].id
function submit(){
  console.log("you can comment");
  out.innerHTML="";
  outcomment.innerHTML="";
  
  let the_comment={
    name:username.value,
    message:message.value
  }
  let temp = arrarticle[0].id
  posts[temp].comments.push(the_comment);
  console.log(posts)
  username.value="";
  message.value="";
  localStorage.setItem("post", JSON.stringify(posts));

  display();


  
  
}

//Leave a comment
const username= document.getElementById('username');
const message= document.getElementById('message');
const out= document.getElementById('out');
const outcomment=document.getElementById('outcomment')

document.getElementById('send').addEventListener('click', function(event) {
  event.preventDefault();
  let isValid =true;
  if(username.value ==""){
    isValid=false;
    username.style.borderColor = "white";
    out.innerHTML="You must fill your Name !!";
  }
  if(message.value ==""){
    isValid=false;
    message.style.borderColor = "white";
    outcomment.innerHTML="You must fill your comment !!";
  }
  else{
    if(isValid) submit();
    
  }

});

// window.onload(()=>{
//   if(currentUser){
//     document.getElementById('log_B').innerHTML="Logout";
    
//   }

// })