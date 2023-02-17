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


pageArray=JSON.parse(localStorage.getItem('pageArray')) || [];
window.onload=()=>{
  out_date.innerHTML+=`${pageArray[0].date}`;
  out_text.innerHTML+=`${pageArray[0].text}`;
  out_title.innerHTML+=`${pageArray[0].title}`;

  pageArray=[]
  localStorage.setItem('pageArray', JSON.stringify(pageArray));



}