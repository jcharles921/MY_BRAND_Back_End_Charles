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
window.onload=()=>{
  display();
  posts=JSON.parse(localStorage.getItem('post')) || [];

}
posts=JSON.parse(localStorage.getItem('post')) || [];

function display(){
  // console.log(posts[0].image)
            
          if (posts !==[]){
            for( i=0;i <posts.length;i++){
              out_post.innerHTML += `<li class="post">
              <span>
                  <a href="/pages/Blog/Articles/Article.html">
                  <div class="postimage">
                  <img  src=${posts[i].image} alt="">
                  </div>
                 
                  
                  <div class="postdescription">
                  <p class="post_title">${posts[i].title}</p> </a>
                      <p class="postdate">${posts[i].date}</p>
                      <div class="likes_comments">
                          <div>
                              <img src="/assets/images/chat.svg" alt="">
                              <img src="/assets/images/likes.svg" alt="">
                          </div>
                          <div>
                              <p style="right: 45px;">3</p>
                              <p style="right: 15px;">4</p>     
                          </div>
              
                      </div>
                  </div>
              </span>
              </li>`
            }
          }
}

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
  posts.forEach(function(element,index) {
    let pageArray=[]
    let visitpage={
      title:element.title,
      text:element.text,
      date:element.date,
      comments:"",
      likes:""
    
    }
    pageArray.push(visitpage);
    localStorage.setItem('pageArray',JSON.stringify(pageArray));
    // window.location.href = "/pages/Blog/Articles/Article.html";


  });

  




}

//href="/pages/Blog/Articles/Article.html"