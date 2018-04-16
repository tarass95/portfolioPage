// this script shortened the string if it's too large
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};


(function (num) {
	var x = document.getElementsByClassName("projectDescription");
	for (var i = 0; i < x.length; i++) [i].innerHTML 
		= truncateString(x[i].textContent, num);	
})(240);










