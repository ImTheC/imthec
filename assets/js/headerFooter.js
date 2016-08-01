$(function(){

	// Load Header
	// (function(){
	// 	var header = [
	// 		'<div class="inner">',
	// 		'<a href="index.html" class="logo">',
	// 			'<span class="symbol">',
	// 				'<img src="images/imthecprofile.jpg" alt="Christopher\'s picture"/>',
	// 			'</span>',
	// 			'<span><h1>Christopher Anderson</h1></span>',
	// 		'</a>',
	// 			'<nav id="nav">',
	// 			'</nav>',
	// 		'</div>'
	// 	];
	// 	$('#header').append(header.toString().replace(/[,]/g, ''));
	// }());

	// Load Menu
	(function(){
			$('#nav').append('<ul><li><a href="#menu">Menu</a></li></ul>');

			$('#menu').append('<h2>Menu</h2><ul><li><a href="index.html">Home</a></li><li><a href="coder.html">Coder</a></li><li><a href="writer.html">Writer</a></li><li><a href="actor.html">Actor</a></li></ul>');
	}());

	// Load Footer
	(function(){
			$('#footer').append('<div class="inner"><section><ul class="copyright"><li>&copy; Christopher Anderson. All rights reserved. </li></ul></section><section><h2>Get in touch</h2><ul class="icons"><li><a href="https://www.twitter.com/WordLicker" class="icon style2 fa-twitter"><span class="label">Twitter</span></a></li><li><a href="https://www.github.com/ImTheC" class="icon style2 fa-github"><span class="label">GitHub</span></a></li></ul></section></div>');
	}());

}); // End of jQuery
