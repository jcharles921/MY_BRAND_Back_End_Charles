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
// posts=JSON.parse(localStorage.getItem('post')) || [];
// if (!Array.isArray(posts)) {
//   posts = [];
// }
let posts=[];
const token= document.cookie.split('=')[1];
function display(){ 
  
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
    for( i=0;i <posts.length;i++){
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
                          <img src="/assets/images/Delete.svg" class='Delete' onclick="elimination()" data-num=${i} "alt="">
            
                      </div>
                  </div>
              </span>
            </li>`
    }

  })       
        
          }

//Posting by storing in Localstorage
button.addEventListener('click', ()=>{

  const article_image= document.getElementById('image-pic').files[0];
let reader = new FileReader();
    reader.readAsDataURL(article_image);
 reader.onload=()=>{

  const data={content:article_text.value, title:article_title.value, imageUrl:reader.result, createdAt:article_date.value }
  console.log(data);

  fetch('http://localhost:5000/api/v1/CRUD',{


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
  })
  // let article= {
  //   title: document.getElementById('title').value,
  //   date: document.getElementById('date').value,
  //   text:document.getElementById('text').value,
  //   // title: article_title.value,
  //   // date: article_date.value,
  //   // text:article_text.value,
  //   image: reader.result,
  //   delete: "/assets/images/Delete.svg",
  //   edit: "/assets/images/Edit.svg",
  //   comments:[],
  //   likes:""
  // }
  // posts.push(article);
  // console.log(posts);
  // localStorage.setItem('post',JSON.stringify(posts));
 }
//  display();
})


//UPDATE POST 
buttonUpdate.addEventListener('click', ()=>{
  const article_image= document.getElementById('image-pic').files[0];
  let reader = new FileReader();
      reader.readAsDataURL(article_image);
    reader.onload=()=>{
      const data={content:article_text.value, title:article_title.value, imageUrl:reader.result  }
      
      let theId= localStorage.getItem("currentID")
      console.log(theId)
      console.log(data);
      fetch(`http://localhost:5000/api/v1/CRUD/${theId}`,{
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
      })


      })
    }
    location.reload();  
  
})
// DELETING POST
;

function elimination(){

  let theId= localStorage.getItem("currentID");
  fetch(
    `http://localhost:5000/api/v1/CRUD/${theId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorized": `${token}`
      },

    }
  )
  .then((response)=>{
    response.json()
    .then((data)=>{
      alert(data);
      console.log(data)
  })
  })
  


// arrDelete.forEach((e) => {
//   e.addEventListener('click',()=>{
//     console.log("hello")
//   document.getElementById('confirmation').style.display="flex";
//   ;
//   ;
//   document.getElementById('yes').addEventListener('click', ()=>{
//     let myid= e.dataset.num;
//     console.log(myid)
//     posts.splice(myid, 1);
//     localStorage.setItem("post", JSON.stringify(posts));
//     // location.reload();
//   })
//   document.getElementById('no').addEventListener('click',()=>{
//     document.getElementById('confirmation').style.display="none";
//   })
  
//   })
// })
  
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
         fetch(`http://localhost:5000/api/v1/CRUD/${myid}`,{
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      document.getElementById('title').value=response.data.title;
      document.getElementById('text').value=response.data.content;
      document.getElementById('currentPostImage').src=response.data.imageUrl;

      
    })

      }


    })
   
 
  
  })

  })
    
  


   //  console.log(myid)
  //  console.log(`http://localhost:5000/api/v1/CRUD/${myid}`)
  

    // fetch(`http://localhost:5000/api/v1/CRUD/${myid}`,{
    // })
    // .then(response => response.json())
    // .then(response => {
    //   console.log(response)
    // })



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
