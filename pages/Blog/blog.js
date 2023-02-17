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

}
posts=JSON.parse(localStorage.getItem('post')) || [];
function display(){
  // console.log(posts[0].image)
            
          if (posts !==[]){
            for( i=0;i <posts.length;i++){
              out_post.innerHTML += `<li class="post">
              <a href="/pages/Blog/Articles/Article.html">
                  <div class="postimage">
                      <img  src=${posts[i].image} alt="">
                  </div>
                  
                  <div class="postdescription">
                      <p class="post_title">${posts[i].title}</p>
                      <p class="postdate">${posts[i].date}</p>
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
              </li> `
            }
          }
}
