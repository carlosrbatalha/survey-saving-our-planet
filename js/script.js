

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



// if statemment related with change with quotes and format change

var quotesLow = [
'I think what is interesting in life is all the cracks and all the flaws and all the moments that are not perfect - Clemence Poesy',
'I\'m always in search for perfection. If it\'s not perfect, I\'m back to the drawing board - Venus Williams',
'We\'re not perfect, but we want to do the right thing - Charlie Bell',
'Failure is the key to success; each mistake teaches us something - Morihei Ueshiba',
'The human condition is not perfect. We are not perfect specimens, any of us. We\'re not robots - Michael Ovitz',
'Self-belief and hard work will always earn you success - Virat Kohli',
'Success isn\'t always about greatness. It\'s about consistency. Consistent hard work leads to success. Greatness will come - Dwayne Johnson',
'Success is a journey, not a destination. The doing is often more important than the outcome - Arthur Ashe'
]

var quotesHigh = [

'You very well deserve these congrats for your hard work and dedication. Congratulations on your success.',
'You\'ve made us all so proud. I am very happy for you.',
'Good work. Your hard work has truly paid off.',
'You have performed extremely adequately.',
'My face has a proud smile because of you.',
'Congratulations for being so balanced and focused throughout. Enjoy your success.',
'Congratulations on scaling new heights and setting new standards.'




]








    var randomNumber = Math.floor(Math.random() * (quotesLow.length));
    var randomNumberTwo = Math.floor(Math.random() * (quotesHigh.length));

    
	if ((25 + radioTwo + radioThree + radioFour + radioFive + radioSix + radioSeven + radioEight) >= 50 ) {


    document.getElementById("result").style.color = "green";
    document.getElementById("quoteDisplayHigh").innerHTML = quotesHigh[randomNumberTwo];
    

	}


	else {

document.getElementById("result").style.color = "red";
document.getElementById("quoteDisplayLow").innerHTML = quotesLow[randomNumber];

	}

	





	form.reset();



};







// function to show the popup


function myFunction(){

var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;


    if (form.name.value == "")
    	return false;
    if (form.email.value == "")
    	return false;
    if (form.age.value == "")
    	return false;
    if (form.transportation.value == "")

    	return false;

   if (!emailFilter.test(form.email.value)) {
  
        return false;
    }


    
   


    else
    	return location.href="#popup1";
}





