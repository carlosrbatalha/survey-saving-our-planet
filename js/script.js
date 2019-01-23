

var form = document.getElementById('survey-form');


// function to print information from the form

form.onsubmit = function (e) {

	e.preventDefault ();
	var result = document.getElementById('result');
	var result3 = document.getElementById('result3');
	

	var selectValue = form.transportation.value;
    
 // Selected Value options


	if (selectValue == "car") {
       
       selectValue = 0

	}

	if (selectValue == "motorbike") {
       
       selectValue = 10

	}

	if (selectValue == "bus") {
       
       selectValue = 10

	}

	if (selectValue == "taxi") {
       
       selectValue = 0

	}

	if (selectValue == "train") {
       
       selectValue = 10

	}

	if (selectValue == "plane") {
       
       selectValue = -10

	}

	if (selectValue == "bicycle") {
       
       selectValue = 20

	}

	if (selectValue == "walk") {
       
       selectValue = 20

	}



   // Radio Itens 


   

   var radioOne = document.getElementById('one').value;

    if (document.getElementById('one').checked) {
    radioOne = 20;
     
}

else {

	radioOne = 0;
}





var radioTwo = document.getElementById('two').value;

    if (document.getElementById('two').checked) {
    radioTwo = 20;
     
}

else {

	radioTwo = 0;
}

var radioThree = document.getElementById('three').value;

    if (document.getElementById('three').checked) {
    radioThree = 20;
     
}

else {

	radioThree = 0;
}
   

   var radioFour = document.getElementById('four').value;

    if (document.getElementById('four').checked) {
    radioFour = 20;
     
}

else {

	radioFour = 0;
}


var radioFive = document.getElementById('five').value;

    if (document.getElementById('five').checked) {
    radioFive = 20;
     
}

else {

	radioFive = 0;
}


var radioSix = document.getElementById('six').value;

    if (document.getElementById('six').checked) {
    radioSix = 20;
     
}

else {

	radioSix = 0;
}

var radioSeven = document.getElementById('seven').value;

    if (document.getElementById('seven').checked) {
    radioSeven = 20;
     
}

else {

	radioSeven = 0;
}



var radioEight = document.getElementById('eight').value;

    if (document.getElementById('eight').checked) {
    radioEight = 20;
     
}

else {

	radioEight = 0;
}

    

   


    

    	result.innerHTML =  25 + radioTwo + radioThree + radioFour + radioFive + radioSix + radioSeven + radioEight + "%"


    
	if ((25 + radioTwo + radioThree + radioFour + radioFive + radioSix + radioSeven + radioEight) >= 50 ) {


    document.getElementById("result").style.color = "green";

	}


	else {

document.getElementById("result").style.color = "red";

	}

	





	form.reset();



};


// function to show the result




// function to show the popup


function myFunction(){
    if (form.name.value == "")
    	return false;
    if (form.email.value == "")
    	return false;
    if (form.age.value == "")
    	return false;
   


    else
    	return location.href="#popup1";
}





