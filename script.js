/* .js files add interaction to your website */

// Fact generator

var factList = ["Earth’s surface continues to warm: recent temperatures are the hottest in the past 2,000-plus years.","The Greenland and Antarctic ice sheets are losing large amounts of land-based ice as a result of human-caused global warming.","The water from melting ice sheets and glaciers + the expansion of seawater as it warms contributes to the rising of sea levels.","Ninety percent of global warming is occurring in the ocean, with the last decade and the year 2021 being the hottest."];
// variables for generator
var fact = document.getElementById("fact");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayFact);
// displaying the fact on website
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if(count == factList.length){
    count = 0;
  }
}
