

var form = document.getElementById('survey-form');
var nameResult = document.getElementById('')


form.onsubmit = function (e) {

	e.preventDefault ();
	var nameResult = document.getElementById('');
	console.log (form.name.value);
 



	form.reset();



};


function myFunction(){
    if (form.name.value == "")
    	return false;
    if (form.email.value == "")
    	return false;

    else
    	return location.href="#popup1";
}


