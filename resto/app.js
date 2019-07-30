var ratings = document.querySelectorAll(".rating");
	

ratings.forEach (function (rating){
var ratingDish = rating.querySelectorAll(".ratingDish") 
rating.onclick = function(e){
	rating.classList.remove('unselected');
var target = e.target;
  if(target.classList.contains('ratingDish')){
    removeClass(ratingDish,'active')
    target.classList.add('active');
  }
}
});


function removeClass(elements, className) {
  for (var i = 0; i < elements.length; i++) {
     elements[i].classList.remove(className);
  }
}

 


