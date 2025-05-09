document.addEventListener('scroll', ()=>{
  const navbar = document.querySelector('.navbar');
  if(window.scrollY === 0){
    navbar.classList.remove('scrolled');
  }
  else{
    navbar.classList.add('scrolled');
  }
});


//form 
const signinButton = document.getElementById('signin-icon');
const signupForm = document.getElementById('signup-form');


signinButton.addEventListener('click', () => {
  signupForm.classList.toggle('show');
  signupForm.style.paddingTop ='120px';
});


