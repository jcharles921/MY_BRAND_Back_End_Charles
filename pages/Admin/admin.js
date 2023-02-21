//getting elements from article
const article_title= document.getElementById('title');
const article_date= document.getElementById('date');
const article_text= document.getElementById('text');
const currentPostImage=document.getElementById('currentPostImage');
const buttonUpdate=document.getElementById('buttonUpdate');
const button= document.getElementById('button');
const out_post= document.getElementById('out_post');
// const edit =document.getElementsByClassName('edit');
// const clear = document.getElementsByClassName('delete');

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
  // console.log(posts[0].image)
        
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
                                <a><img data-num=${i} src=${posts[i].edit} class='Edit' onclick="edit()" alt=""></a> 
                                  <img src=${posts[i].delete}  onclick="eliminate()"alt="">
                    
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
    title: article_title.value,
    date: article_date.value,
    text:article_text.value,
    image: reader.result,
    delete: "/assets/images/Delete.svg",
    edit: "/assets/images/Edit.svg",  
  }

 
  posts.push(article);
  console.log(posts);
  localStorage.setItem('post',JSON.stringify(posts));
 }
 
 location.reload()
})

//UPDATE
buttonUpdate.addEventListener('click', ()=>{
  let posts=JSON.parse(localStorage.getItem('post')) || [];
  const article_image= document.getElementById('image-pic').files[0];
let reader = new FileReader();
    reader.readAsDataURL(article_image);
 reader.onload=()=>{
  let article= {
    title: article_title.value,
    date: article_date.value,
    text:article_text.value,
    image: reader.result,
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



















//DELETING POST
function eliminate(index){
  console.log(posts)
  posts.splice(index,1);
  localStorage.setItem("post", JSON.stringify(posts) );
  location.reload();
}

// EDITING THE POST
function edit(){
  const Edit = document.getElementsByClassName('Edit');
  let arrEdit = Array.from(Edit)
  arrEdit.forEach((e) => {
    e.addEventListener('click',()=>{
      console.log("HIGH")
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
            // location.reload();
            display();
            


          }
      }
    })
    
  });




}

//Displaying post in the posts section
window.onload=()=>{
  article_text.value="";
  article_date.value="";
  article_title.value="";
display();

}
