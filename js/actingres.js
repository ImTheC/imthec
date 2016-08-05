$(function(){

	$.getJSON( "js/actingres.json", function( res ) {
		console.log(res);
	}).fail(function(err) {
      console.log(err.responseText);
    });

}); // End of jQuery
