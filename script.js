// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
//var clues = document.getElementById("clues");
//var  mid1 = document.getElementById("mid1");
//var  mid2 = document.getElementById("mid2");
//var timer = setInterval( clueTwo, 1000);
//
var a = document.getElementById("left");

function nextImage(el){
	if (a.src.match("images/gauge1.png")){
		a.src = "images/gauge2.png";
	} else if (a.src.match("images/gauge2.png")){
		a.src = "images/gauge3.png";
	} else if (a.src.match("images/gauge3.png")){
		a.src = "images/gauge4.png";
	} else if (a.src.match("images/gauge4.png")) {
		a.src = "images/gauge1.png";
	}
}

	