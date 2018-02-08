import './styles.css';


$(document).ready(function() {
	$('.parallax').parallax();
});

navigator.serviceWorker && navigator.serviceWorker.register('sw.js').then(function(registration){
        console.log('Excellent, registered with scope: ', registration.scope);
});
