$(function(){
	"use strict";

	$('.scrollspy').scrollSpy();

	$('.modal-trigger').leanModal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: 0.5, // Opacity of modal background
			in_duration: 600, // Transition in duration
			out_duration: 400, // Transition out duration
			starting_top: '5%', // Starting top style attribute
			ending_top: '10%', // Ending top style attribute
		}
	);

$('.button-collapse').sideNav({
	menuWidth: 240, // Default is 240
	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

/*** Animate word ***/



}); // end of document ready
