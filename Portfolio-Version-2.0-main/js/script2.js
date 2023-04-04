
var aText = new Array(
"<br> > <b>getEducation() ... </b>",
"Computer science and Engineering from P A  College of Engineering with a CGPA of 8.77(2020 - present)",
"<br>",
"<br> > <b>getVolunteerExperience() ... </b>",
"Conducted several workshops on microbit under the Embed Club in our college of which iam a member. Hosted technical and non technical events in college. Currently the Secretary of IEEE student branch in PACE. Also have an experience in teaching maths and physics at tuition centers",
"<br>",
"> <b>getAcheivement() ... </b>",
"Winner of ACCS - ARM Design Challenge 2022, a National Level Project Competition, held at IIIT - Bangalore for the project Flygirl - an Automatic Sanitary Pad Vending Machine"
);

var iSpeed = 35;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 700);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

setTimeout("typewriter()", 10000);
