var thisYear = new Date();

var yearsAgo = function(year) {
  var yearAgo = thisYear.getFullYear() - year;
  console.log("That was " + yearAgo + " years ago.");
}

yearsAgo(2010);
