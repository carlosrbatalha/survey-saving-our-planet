

var form = document.getElementById('survey-form');


// function to print information from the form

form.onsubmit = function (e) {

  e.preventDefault ();
  var result = document.getElementById('result');
  
  

  var selectValue = form.transportation.value;
  
    
 // Selected Value options

 var selectedCar = document.getElementById('car').value;

if (document.getElementById('car').selected) {
    selectedCar = 0;
     
}

else {

  selectedCar = 0;
}


var selectedMoto = document.getElementById('motorbike').value;

if (document.getElementById('motorbike').selected) {
    selectedMoto = 0;
     
}

else {

  selectedMoto = 0;
}




var selectedBus = document.getElementById('bus').value;

if (document.getElementById('bus').selected) {
    selectedBus = 10;
     
}

else {

  selectedBus = 0;
}



var selectedTaxi = document.getElementById('taxi').value;

if (document.getElementById('taxi').selected) {
    selectedTaxi = 0;
     
}

else {

  selectedTaxi = 0;
}


var selectedTrain = document.getElementById('train').value;

if (document.getElementById('train').selected) {
    selectedTrain = 10;
     
}

else {

  selectedTrain = 0;
}

  

var selectedPlane = document.getElementById('plane').value;

if (document.getElementById('plane').selected) {
    selectedPlane = -10;
     
}

else {

  selectedPlane = 0;
}

  var selectedBike = document.getElementById('bicycle').value;

if (document.getElementById('bicycle').selected) {
    selectedBike = 20;
     
}

else {

  selectedBike = 0;
}

  var selectedWalk = document.getElementById('walk').value;

if (document.getElementById('walk').selected) {
    selectedWalk = 20;
     
}

else {

  selectedWalk = 0;
}

  



   // Radio Itens 


   

   var radioOne = document.getElementById('one').value;

    if (document.getElementById('one').checked) {
    radioOne = 5;
     
}

else {

  radioOne = 0;
}





var radioTwo = document.getElementById('two').value;

    if (document.getElementById('two').checked) {
    radioTwo = 5;
     
}

else {

  radioTwo = 0;
}

var radioThree = document.getElementById('three').value;

    if (document.getElementById('three').checked) {
    radioThree = 5;
     
}

else {

  radioThree = 0;
}
   

   var radioFour = document.getElementById('four').value;

    if (document.getElementById('four').checked) {
    radioFour = 5;
     
}

else {

  radioFour = 0;
}


var radioFive = document.getElementById('five').value;

    if (document.getElementById('five').checked) {
    radioFive = 5;
     
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
    radioSeven = 0;
     
}

else {

  radioSeven = 0;
}



var radioEight = document.getElementById('eight').value;

    if (document.getElementById('eight').checked) {
    radioEight = 10;
     
}

else {

  radioEight = 0;
}

    

   


    

   result.innerHTML =  35 + selectedCar + selectedMoto + selectedBus + selectedTaxi + selectedTrain + selectedPlane + selectedBike + selectedWalk + radioOne + radioTwo + radioThree + radioFour + radioFive + radioSix + radioSeven + radioEight + "%"



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

'You very well deserve these congrats for your hard work and dedication. Congratulations on your success.',
'You\'ve made us all so proud. I am very happy for you.',
'Good work. Your hard work has truly paid off.',
'You have performed extremely adequately.',
'My face has a proud smile because of you.',
'Congratulations for being so balanced and focused throughout. Enjoy your success.',
'Congratulations on scaling new heights and setting new standards.'




]




  var resultFinal = 35 + selectedCar + selectedMoto + selectedBus + selectedTaxi + selectedTrain + selectedPlane + selectedBike + selectedWalk + radioOne + radioTwo + radioThree + radioFour + radioFive + radioSix + radioSeven + radioEight;



    var randomNumber = Math.floor(Math.random() * (quotesLow.length));
    var randomNumberTwo = Math.floor(Math.random() * (quotesHigh.length));

    
  if (resultFinal < 50 ) {


   
    document.getElementById("result").style.color = "#848C35";
    document.getElementById("quoteDisplayLow").innerHTML = quotesLow[randomNumber];
    

  }


  else if (resultFinal <= 100) {

    

document.getElementById("result").style.color = "#9a8b67";

document.getElementById("quoteDisplayHigh").innerHTML = quotesHigh[randomNumberTwo];



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



