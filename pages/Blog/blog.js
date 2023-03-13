const hamburgerButton = document.querySelector('.hambourger');
const hamburgerView = document.querySelector('.hamburger_view');
const out_post= document.getElementById('out_post')


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

// posts=JSON.parse(localStorage.getItem('post')) || [];


function display(){
  // console.log(posts[0].image)s
  fetch('http://localhost:5000/api/v1/CRUD',{
  })
  .then(response => response.json())
  .then(response => {
    for(i=0;i<response.data.length;i++){
      posts.push(response.data[i])
    }
    ;


  })
  
  .then(()=>{
    function formatDate(dateTimeString) {
      const dateTime = new Date(dateTimeString);
      const year = dateTime.getFullYear();
      const month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
      const date = ("0" + dateTime.getDate()).slice(-2);
      const hours = ("0" + dateTime.getHours()).slice(-2);
      const minutes = ("0" + dateTime.getMinutes()).slice(-2);
      return `${year}-${month}-${date}`;
    }

    console.log(posts)
    for( i=0;i <posts.length;i++){
      posts[i].createdAt=formatDate(posts[i].createdAt);
      out_post.innerHTML += `<li class="post">
      <span>
          <a onclick="currentPost()" data-num=${i} class="blogpost" >
          <div class="postimage">
          <img  src=${posts[i].imageUrl} alt="">
          </div>
          
          
          <div class="postdescription">
          <p class="post_title">${posts[i].title}</p> </a>
              <p class="postdate">${posts[i].createdAt}</p>
              <div class="likes_comments">
                  <div>
                      <img src="/assets/images/chat.svg" alt="">
                      <img src="/assets/images/likes.svg" alt="">
                  </div>
                  <div>
                      <p style="right: 45px;">${posts[i].commentSection.length}</p>
                      <p style="right: 15px;">0</p>     
                  </div>
      
              </div>
          </div>
      </span>
      </li>`
    }
  })
    .catch(err => console.log(err))
  }
          currentPost();


{/* <li class="post">
              <a onclick="currentPost()" >
                  <div class="postimage">
                      <img  src=${posts[i].image} alt="">
                  </div>
                  
                  <div class="postdescription">
                      <p class="post_title">${posts[i].title}</p>
                      <p class="postdate"></p>
                      <div class="likes_comments">
                          <div>
                              <img src="/assets/images/chat.svg" alt="">
                          </div>
                          <div>
                              <img src="/assets/images/likes.svg" alt="">
                          </div>
                          <p>3</p>
                          <p>4</p>
                      </div>
                  </div>
              </a>
              </li>  */}


function currentPost(){
  const current= document.getElementsByClassName("blogpost");
  let arrCurrent=Array.from(current);
  arrCurrent.forEach((e)=>{
    e.addEventListener('click',()=>{
              let pageArray=[]
        let myid=e.dataset.num;
        console.log(myid)
        // console.log(posts[myid])
          for(i=0;i<posts.length;i++){
          if(myid==i){
            let visitpage={
              title:posts[i].title,
              text:posts[i].content,
              date:posts[i].createdAt,
              comments:{
                name:"User2",
                message:"Hello charles"
              },
              id:posts[i]._id,
              likes:""
            
            }
            pageArray.push(visitpage);
          }


          }
          console.log(pageArray);
            localStorage.setItem('pageArray',JSON.stringify(pageArray));
            window.location.href = "/pages/Blog/Articles/Article.html";


    })
  })


}
//LOGOUT
document.getElementById('log_B').addEventListener('click', ()=>{
  window.location.href = "/pages/Login/Login.html";
  let emptier='';
  localStorage.setItem('currentUser', JSON.stringify(emptier))
})
//PROFILE
// function profile(e){
//   console.log("profile");
  
 
//   // e.addEventListener('click',()=>{
//   //   if(currentUser.data.isAdmin== true){
//   //     window.location.href="/pages/Admin/admin.html";
//   //   }
//   //   else{
//   //     window.location.href="/pages/User/user.html"
  
//   //   }
 
// }
document.getElementById('profile').addEventListener('click',()=>{
  var currentUser= JSON.parse(localStorage.getItem('currentUser'))
      if(currentUser.data.isAdmin== true){
      window.location.href="/pages/Admin/admin.html";
    }
    else{
      window.location.href="/pages/User/user.html"
  
    }
  })

// }))
//href="/pages/Blog/Articles/Article.html"
window.onload=()=>{
  var currentUser= JSON.parse(localStorage.getItem('currentUser'))
  // console.log(currentUser)
  if(currentUser){
    document.getElementById('log_B').innerHTML="Logout";
    
  }
  else{
    document.getElementById("profile").style.display="none"
  }
  posts=[]
  // posts=JSON.parse(localStorage.getItem('post')) || [];
  display();
 

}