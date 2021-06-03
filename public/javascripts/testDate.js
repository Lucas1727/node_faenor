function myDate(date) {

  var n1 = new Date(date);

  d1 = n1.getDate();
  m1 = n1.getMonth() + 1;
  y1 = n1.getFullYear();

  var newDate = innerHTML = (d1 + "/" + m1 + "/" + y1);
  console.log(newDate);

  return newDate;
}

function myRating(rating) {

  if(rating == 5){
    var stars = "&#9733; &#9733; &#9733; &#9733; &#9733;";
  } else if(rating == 4){
    var stars = "&#9733; &#9733; &#9733; &#9733; &#9734;";
  } else if(rating == 3){
    var stars = "&#9733; &#9733; &#9733; &#9734; &#9734;";
  } else if(rating == 2){
    var stars = "&#9733; &#9733; &#9734; &#9734; &#9734;";
  } else if(rating == 1){
    var stars = "&#9733; &#9734; &#9734; &#9734; &#9734;";
  }

  return stars;
}
