function myDate(date) {

  var n1 = new Date(date);

  d1 = n1.getDate();
  m1 = n1.getMonth() + 1;
  y1 = n1.getFullYear();

  var newDate = innerHTML = (d1 + "/" + m1 + "/" + y1);
  console.log(newDate);

  return newDate;
}
