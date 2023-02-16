//getting elements from article
const article_title= document.getElementById('title');
const article_date= document.getElementById('date');
const article_text= document.getElementById('text');
const article_image= document.getElementById('image-pic').src;
const button= document.getElementById('button');
const out_post= document.getElementById('out_post')

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
// Convert the image to a base64 encoded string
const photo = new Image();
photo.src= article_image;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = photo.width;
canvas.height = photo.height;
ctx.drawImage(photo, 0, 0);
const userpic = canvas.toDataURL();

//Article object and contenue


let posts=[]


//posting by storing in Localstorage
button.addEventListener('click', ()=>{
  let article= {
  title: article_title.value,
  date: article_date.value,
  text:article_text,
  image: userpic

}
  posts.push(article);
  localStorage.setItem('post',JSON.stringify(posts));
})
//Displaying post in the posts section
window.onload=()=>{
posts=JSON.parse(localStorage.getItem('post'));
posts.forEach((post, index)=>{
  out_post.innerHTML += ` <li class="post">
  <span >
      <div class="postimage">
      ${post[index].image}
      </div>
      
      <div class="postdescription">
          <p class="post_title">${post[index].title}</p>
          <p class="postdate">${post[index].date}</p>
          <div class="Control_post">
             <a href="/pages/Blog/Articles/Article.html"><img src="/assets/images/Edit.svg" alt=""></a> 
              <img src="/assets/images/Delete.svg" alt="">

          </div>
      </div>
  </span>
</li>`

})
}
