

var form = document.getElementById('survey-form');


form.onsubmit = function (e) {

	e.preventDefault ();
	console.log (form.name.value);
	form.reset();
};