window.addEventListener('scroll',function()

{
let navbar = this.document.getElementById('menu-bar');

 if (window.pageYOffset >=411 ){
    navbar.classList.add('sticky');
    
 } else{
    navbar.classList.remove('sticky');
 }
});