const appear = document.querySelector('.appear'); 
const cb = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io = new IntersectionObserver(cb);
io.observe(appear);

const appear2 = document.querySelector('.appear2'); 
const cb2 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io2 = new IntersectionObserver(cb);
io.observe(appear2);

const appear3 = document.querySelector('.appear3'); 
const cb3 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io3 = new IntersectionObserver(cb);
io.observe(appear3);


const appear4 = document.querySelector('.appear4'); 
const cb4 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      seen = true;
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io4 = new IntersectionObserver(cb);
io.observe(appear4);

const appear5 = document.querySelector('.appear5'); 
const cb5 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      seen = true;
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io5= new IntersectionObserver(cb);
io.observe(appear5);

const appear6 = document.querySelector('.appear6'); 
const cb6 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      seen = true;
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io6 = new IntersectionObserver(cb);
io.observe(appear6);

const appear7 = document.querySelector('.appear7'); 
const cb7 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      seen = true;
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io7 = new IntersectionObserver(cb);
io.observe(appear7);

const appear8 = document.querySelector('.appear8'); 
const cb8 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      seen = true;
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io8 = new IntersectionObserver(cb);
io.observe(appear8);

var textOverImages=document.querySelectorAll(".box-p p");
//var titleImages=document.querySelectorAll(".box-p1 h3");
var previousTextOverImage;
for(var i=0; i<textOverImages.length; i++){
  textOverImages[i].onclick=function(){
    var classes = this.classList;
    if(classes.contains("show")){
      classes.remove("show")
      //titleImages.classList.add("show")
    }
    else{
      if(previousTextOverImage!=null)
      previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
      //titleImages.classList.remove("show")
    }
  }
}