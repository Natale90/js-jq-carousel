
function prevSlide(){
  //individup l'immagine in active ovver in display inline
  var activeImg = $(".active");
  //grazie a .prev() recupero l'elemento subito precedente ad activeImg di tipo img
  var prevImg = activeImg.prev("img");
  //se all'img in active è associata la classe first, allora l'img seguente dovrà essere quella con associata la classe last
  if(activeImg.hasClass("first")){
    var prevImg = $("img.last");

    activeImg.removeClass("active");
    prevImg.addClass("active");
  } else{

    activeImg.removeClass("active");
    prevImg.addClass("active");
  }
}



function nextSlide(){
  //individup l'immagine in active, ovvero in display inline
  var activeImg = $(".active");
  //grazie a .next() recupero l'elemento successivo ad activeImg di tipo img
  var nextImg = activeImg.next("img");

  //se all'img in active è associata la classe last, allora l'img seguente dovrà essere quella con associata la classe first
  if(activeImg.hasClass("last")){

    var nextImg = $("img.first");

    activeImg.removeClass("active");
    nextImg.addClass("active");
  } else {

    activeImg.removeClass("active");
    nextImg.addClass("active");
  }
}


function nextCircle(){

  var circleActive = $(".circle_active");
  var nextCircle = circleActive.next("i");

  // circleActive.removeClass("circle_active");
  // nextCircle.addClass("circle_active");

  if(circleActive.hasClass("last")){

    var nextCircle = $("i.first");

    circleActive.removeClass("circle_active");
    nextCircle.addClass("circle_active");
  } else {

    circleActive.removeClass("circle_active");
    nextCircle.addClass("circle_active");
  }
}

function prevCircle(){

  var activeCircle = $(".circle_active");
  var prevCircle = activeCircle.prev("i");

  if(activeCircle.hasClass("first")){

    var prevCircle = $("i.last");

    activeCircle.removeClass("circle_active");
    prevCircle.addClass("circle_active");
  } else {

    activeCircle.removeClass("circle_active");
    prevCircle.addClass("circle_active");
  }
}

function init(){

  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);
  $(".next").click(nextCircle);
  $(".prev").click(prevCircle);
}

$(document).ready(init);
