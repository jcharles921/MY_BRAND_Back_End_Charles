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
let commentArr=[]

var pageArray=JSON.parse(localStorage.getItem('pageArray')) || [];
window.onload=()=>{
  let currentUser=localStorage.getItem('currentUser');
    if(currentUser){
    document.getElementById('log_B').innerHTML="Logout";

    // displaycomment();
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
display();
  }

// display();
  // pageArray=[]
  // localStorage.setItem('pageArray', JSON.stringify(pageArray));
}
// DISPLAY FROM LOCALSTORAGE
const out_thecomment=document.getElementById('out_thecomment')
function display(){
  let myId= arrarticle[0].id
  fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD/${myId}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'},
  
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response.data.commentSection[0])
        for(i=0;i< response.data.commentSection.length;i++){
          commentArr.push(response.data.commentSection[i])
          // console.log(response.data[i])
        }

        // data.data.comments.forEach(element => {
        //   out_thecomment.innerHTML+=`<div class="comment">
        //   <div class="commenter">
        //     <img src="/assets/images/Icon_profile.svg" alt="">
        //     <p>${element.name}</p>
        //   </div>
        //   <div class="comment_text">
        //     <p>${element.message}</p>
        //   </div>
        // </div>`
        // });
  
      
      
      })
      .then(()=>{
        for(i=0;i<commentArr.length;i++){
          out_thecomment.innerHTML+=`<div class="the_comment" >
                <p>${commentArr[i].username}</p>
                <div >${commentArr[i].message}</div>
            </div>`
        }
        // <div class="comment">
        //   <div class="commenter">
        //     <img src="/assets/images/Icon_profile.svg" alt="">
        //     <p>${commentArr[i].username}</p>
        //   </div>
        //   <div class="comment_text">
        //     <p>${commentArr[i].message}</p>
        //   </div>
        // </div>
      })
      .catch((error) => {
        console.error('Error:', error);
      })
 

}









posts=JSON.parse(localStorage.getItem('post')) || [];
// var anid=arrarticle[0].id
function submit(){
  console.log("you can comment");
  out.innerHTML="";
  outcomment.innerHTML="";
  let myId=arrarticle[0].id;
  console.log(myId)
  
  let the_comment={
    username:username.value,
    message:message.value
  }
  fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD/${myId}/comments`,{
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json'},
      body: JSON.stringify(the_comment)


      

  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    location.reload();
    // setTimeout(()=>{
    //   location.reload();
    // },1000)

  })

  // let temp = arrarticle[0].id
  // posts[temp].comments.push(the_comment);
  // console.log(posts)
  // username.value="";
  // message.value="";
  // localStorage.setItem("post", JSON.stringify(posts));

  // display();

  
    
  }
  
  

// http://127.0.0.1:5000/api/v1/CRUD/640e389f545eb384a917883a/comments
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
