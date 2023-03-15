//getting elements from article
const article_title= document.getElementById('title');
const article_date= document.getElementById('date');
const article_text= document.getElementById('text');
const currentPostImage=document.getElementById('currentPostImage');
const buttonUpdate=document.getElementById('buttonUpdate');
const button= document.getElementById('button');
const out_post= document.getElementById('out_post');
//  Hamburger side navigation 
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

let posts=[];
const token= document.cookie.split('=')[1];

//DISPLAY Blog Article
function display(){ 
  function formatDate(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
    const date = ("0" + dateTime.getDate()).slice(-2);
    const hours = ("0" + dateTime.getHours()).slice(-2);
    const minutes = ("0" + dateTime.getMinutes()).slice(-2);
    return `${year}-${month}-${date}, ${hours}:${minutes}`;
  }
  
  fetch('https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD',{
  })
  .then(response => response.json())
  .then(response => {
    for(i=0;i<response.data.length;i++){
      posts.push(response.data[i])
    }
    ;
  })
  .then(()=>{
    document.getElementById('Load').style.display="none";
    for( i=0;i <posts.length;i++){
      posts[i].createdAt= formatDate(posts[i].createdAt);
      
      out_post.innerHTML += ` <li class="post">
              <span >
                  <div class="postimage">
                  <img src=${posts[i].imageUrl}>
                  </div>
                  
                  <div class="postdescription">
                      <p class="post_title">${posts[i].title}</p>
                      <p class="postdate">${posts[i].createdAt}</p>
                      <div class="Control_post">
                        <img data-num=${posts[i]._id} src='/assets/images/Edit.svg' class='Edit' onclick="edit()" alt="">
                          <img src="/assets/images/Delete.svg" class='Delete' onclick="elimination()" data-num=${posts[i]._id} "alt="">
            
                      </div>
                  </div>
              </span>
            </li>`
    }

  })       
        
          }

//POSTING A BLOG POST
button.addEventListener('click', ()=>{
  const token= document.cookie.split('=')[1];
  console.log(token)


  const article_image= document.getElementById('image-pic').files[0];
let reader = new FileReader();
    reader.readAsDataURL(article_image);
 reader.onload=()=>{

  const data={content:article_text.value, title:article_title.value, imageUrl:reader.result, createdAt:article_date.value }
  console.log(data);

  fetch('https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD',{


    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "authorized": `${token}`
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    alert(response.message  );
    location.reload();
  })

 }
  
})


//UPDATE POST
buttonUpdate.addEventListener('click', ()=>{
  const article_image= document.getElementById('image-pic').files[0];
  let reader = new FileReader();
      reader.readAsDataURL(article_image);
    reader.onload=()=>{
      document.getElementById('currentPostImage').src=reader.result;
      const data={content:article_text.value, title:article_title.value, imageUrl:reader.result  }
      
      let theId= localStorage.getItem("currentID")
      console.log(theId)
      console.log(data);
      fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD/${theId}`,{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          "authorized": `${token}`
        },

        
        body: JSON.stringify(data),
        
      })
      .then((response)=>{
        response.json()
        .then((data)=>{
          console.log(data)
          location.reload();  
      })


      })
    }
    
  
})
// DELETING BLOG POST
;

function elimination(){
const terminate = document.getElementsByClassName('Delete');
let arrDelete = Array.from(terminate)
let allIds=[];
arrDelete.forEach((n) => {
 
  n.addEventListener('click',()=>{
      document.getElementById('confirmation').style.display="flex";
      document.getElementById('yes').addEventListener('click', ()=>{
        let myid= n.dataset.num;
        console.log(myid)
        fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD/${myid}`,{
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "authorized": `${token}`
          },
    
        })
        .then((response)=>{
          response.json()
          .then((data)=>{
            console.log(data)
            alert(data.message)
            location.reload();
          })
        })
      })
      document.getElementById('no').addEventListener('click',()=>{
        document.getElementById('confirmation').style.display="none";
      })
    

  })
});
}






// EDITING THE POST
function edit(){
  buttonUpdate.style.display = 'block';
  button.style.display="none";
  const Edit = document.getElementsByClassName('Edit');
  let arrEdit = Array.from(Edit)
  const allIds=[]

  arrEdit.forEach((n) => {
    allIds.push(n.dataset.num)
    
  })

  arrEdit.forEach((n)=>{
    n.addEventListener('click',()=>{
      let myid=n.dataset.num;
      localStorage.setItem("currentID",(myid));
    allIds.forEach((id)=>{
      if(myid ==id){
         fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD/${myid}`,{
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      document.getElementById('title').value=response.data.title;
      document.getElementById('text').value=response.data.content;
      document.getElementById('currentPostImage').src=response.data.imageUrl;
      window.location.href = "/pages/Admin/admin.html#text";
    

      
    })

      }


    })
   
 
  
  })

  })
    
}
//display all queries
let allQueries=[];
const queries_out= document.getElementById("queries");
const queries=()=>{

  // let allQueries=JSON.parse(localStorage.getItem("allQueries")) || [];
  fetch('https://tame-puce-chipmunk-hose.cyclic.app/api/v1/queries',{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "authorized": `${token}`
    },

  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    
    // queries();
    // for(i=0;i<response.data.length;i++){
    //   posts.push(response.data[i])
    // }
    for(i=0;i<response.data.length;i++){
      allQueries.push(response.data[i])
      console.log('psuhed this'+response.data[i])

    }
    setTimeout(()=>{
      document.getElementById('Load_queries').style.display="none";
      displayQueries();
    },1000)

    // let allQueries=response.data;
   
  })
 
 
}
function displayQueries(){
  console.log(allQueries[0])
  for(i=0;i<allQueries.length;i++){
    let date= allQueries[i].createdAt;
    function formatDate(dateTimeString) {
      const dateTime = new Date(dateTimeString);
      const year = dateTime.getFullYear();
      const month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
      const date = ("0" + dateTime.getDate()).slice(-2);
      const hours = ("0" + dateTime.getHours()).slice(-2);
      const minutes = ("0" + dateTime.getMinutes()).slice(-2);
      return `${year}-${month}-${date}, ${hours}:${minutes}`;
    }
    date=formatDate(date);
    

    if(allQueries==[]){
      queries_out.innerHTML+=`<h2 style="color:white;">No message for you !!</h2>`;
      break;
    }
    else{
      queries_out.innerHTML+=`<span>
                                  <h3>${allQueries[i].name}</h3>
                                  <p>${date}</p>
                                  <textarea rows="4" cols="50">${allQueries[i].message}</textarea>
                              </span>`;
    }
  }
}
//Displaying post in the posts section
window.onload=()=>{
  var sessionData = JSON.parse(localStorage.getItem('currentUser'))
  let tokenvalid = document.cookie;
  if(sessionData && tokenvalid){
    console.log('welcome')
    console.log(sessionData.data.isAdmin)
    if(sessionData.data.isAdmin !== true){
      alert("your are not supposed to be here")
      window.location.href = "/pages/Login/Login.html"
    }
    
  }
  else{
    console.log("you are not welcomed")
    alert('Sign in first');
    window.location.href = "/pages/Login/Login.html"

  }
  article_text.value="";
  article_date.value="";
  article_title.value="";
display();
queries();
}
