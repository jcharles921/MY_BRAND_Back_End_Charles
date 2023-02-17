//getting elements from article
const article_title= document.getElementById('title');
const article_date= document.getElementById('date');
const article_text= document.getElementById('text');

const button= document.getElementById('button');
const out_post= document.getElementById('out_post');
const edit =document.getElementsByClassName('edit');
const clear = document.getElementsByClassName('delete');

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
function display(){
  // console.log(posts[0].image)
            
          if (posts !==[]){
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
                                <a href="/pages/Blog/Articles/Article.html"><img src=${posts[i].edit} class="edit" alt=""></a> 
                                  <img src=${posts[i].delete}  onclick="eliminate()"alt="">
                    
                              </div>
                          </div>
                      </span>
                    </li>`
            }
          }
}

//Posting by storing in Localstorage
let counter=0;


button.addEventListener('click', ()=>{
  const article_image= document.getElementById('image-pic').files[0];
let reader = new FileReader();
    reader.readAsDataURL(article_image);
    let  temp =[];
    counter+=1;
 
 reader.onload=()=>{
  let article= {
    title: article_title.value,
    date: article_date.value,
    text:article_text,
    image: reader.result,
    delete: "/assets/images/Delete.svg",
    edit: "/assets/images/Edit.svg",
    number: counter

  
  }
 
  posts.push(article);
  console.log(posts);
  localStorage.setItem('post',JSON.stringify(posts));
  

 }
 location.reload();
  // display();
})
//DELETING POST
function eliminate(){
  console.log(posts)
 
posts.forEach(element => {
  
 console.log(posts.indexOf(element)) 
 

  
});

}

// let subarr = Array.from(clear)
// console.log(subarr);

// for(j=0;j<subarr.length;j++){
//   subarr[j].onclick= function(){
//     console.log("clicked delete")
    
//     if(posts !==[]){
//       posts.splice(index,j);
//       localStorage.clear();
//       localStorage.setItem('post',JSON.stringify(posts));
//     }


//   }
// }


//Displaying post in the posts section
window.onload=()=>{
display();

}
