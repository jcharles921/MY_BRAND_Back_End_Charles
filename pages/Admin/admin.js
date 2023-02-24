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
// Displaying all the posts
posts=JSON.parse(localStorage.getItem('post')) || [];
if (!Array.isArray(posts)) {
  posts = [];
}
function display(){        
            for( i=0;i <posts.length;i++){
              out_post.innerHTML += ` <li class="post">
                      <span >
                          <div class="postimage">
                          <img src=${posts[i].image}>
                          </div>
                          
                          <div class="postdescription">
                              <p class="post_title">${posts[i].title}</p>
                              <p class="postdate">${posts[i].date}</p>
                              <div class="Control_post">
                                <img data-num=${i} src=${posts[i].edit} class='Edit' onclick="edit()" alt="">
                                  <img src=${posts[i].delete} class='Delete' onclick="elimination()" data-num=${i} "alt="">
                    
                              </div>
                          </div>
                      </span>
                    </li>`
            }
          }

//Posting by storing in Localstorage
button.addEventListener('click', ()=>{
  let posts=JSON.parse(localStorage.getItem('post')) || [];
  const article_image= document.getElementById('image-pic').files[0];
let reader = new FileReader();
    reader.readAsDataURL(article_image);
 reader.onload=()=>{
  let article= {
    title: document.getElementById('title').value,
    date: document.getElementById('date').value,
    text:document.getElementById('text').value,
    // title: article_title.value,
    // date: article_date.value,
    // text:article_text.value,
    image: reader.result,
    delete: "/assets/images/Delete.svg",
    edit: "/assets/images/Edit.svg",
    comments:[],
    likes:""
  }
  posts.push(article);
  console.log(posts);
  localStorage.setItem('post',JSON.stringify(posts));
 }
 location.reload()
})

//UPDATE POST 
buttonUpdate.addEventListener('click', ()=>{
  let posts=JSON.parse(localStorage.getItem('post')) || [];
  const article_image= document.getElementById('image-pic').files[0];
let reader = new FileReader();
    reader.readAsDataURL(article_image);
 reader.onload=()=>{
  let article= {
    title: document.getElementById('title').value,
    date: document.getElementById('date').value,
    text:document.getElementById('text').value,
    image: reader.result,
    // title: article_title.value,
    // date: article_date.value,
    // text:article_text.value,
    // image: reader.result,
    delete: "/assets/images/Delete.svg",
    edit: "/assets/images/Edit.svg",
  }
  posts.push(article);
  console.log(posts);
  localStorage.setItem('post',JSON.stringify(posts));
 }
 location.reload();
  // display();
})
// DELETING POST
const Delete= document.getElementsByClassName('Delete');

function elimination(){
  var arrDelete= Array.from(Delete);


arrDelete.forEach((e) => {
  e.addEventListener('click',()=>{
    console.log("hello")
  document.getElementById('confirmation').style.display="flex";
  ;
  ;
  document.getElementById('yes').addEventListener('click', ()=>{
    let myid=e.dataset.num;
    console.log(myid)
    posts.splice(myid, 1);
    localStorage.setItem("post", JSON.stringify(posts));
    location.reload();
  })
  document.getElementById('no').addEventListener('click',()=>{
    document.getElementById('confirmation').style.display="none";
  })
  
  })
})
  
}





// EDITING THE POST
function edit(){
  const Edit = document.getElementsByClassName('Edit');
  let arrEdit = Array.from(Edit)
  arrEdit.forEach((e) => {
    e.addEventListener('click',()=>{
      // console.log("HIGH")
      buttonUpdate.style.display = 'block';
      button.style.display="none";
      let myid=e.dataset.num;
      console.log(posts[myid])
      // posts=JSON.parse(localStorage.getItem('post'));
      for(let i=0;i<=posts.length;i++){
        
          if(myid==i){
            article_text.value=posts[i].text;
            article_date.value=posts[i].date;
            article_title.value=posts[i].title;
            currentPostImage.style.display="block"
            currentPostImage.src=posts[i].image;
            posts.splice(myid, 1);
            localStorage.setItem("post", JSON.stringify(posts));
            display();
          }
      }
    })
    
  });




}
//display all queries
const queries_out= document.getElementById("queries");
const queries=()=>{
  let allQueries=JSON.parse(localStorage.getItem("allQueries")) || [];
  for(i=0;i<allQueries.length;i++){
    let date= allQueries[i].time;
    let day_hours= date.split("T")

    if(allQueries==[]){
      queries_out.innerHTML+=`<h2 style="color:white;">No message for you !!</h2>`;
      break;
    }
    else{
      queries_out.innerHTML+=`<span>
                                  <h3>${allQueries[i].ton_nom}</h3>
                                  <p>${day_hours}</p>
                                  <textarea rows="4" cols="50">${allQueries[i].message}</textarea>
                              </span>`;
    }
  }

}

//Displaying post in the posts section
window.onload=()=>{
  article_text.value="";
  article_date.value="";
  article_title.value="";
display();
queries();
}
