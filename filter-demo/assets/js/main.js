$(document).ready(function(){
	console.log("I'm ready!");

	$('.mario-item').click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-item').click(function () {
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	$('.btn-all').click(function(){
		$('.research-item').removeClass('hide');
	});
	
	var hideAll = function(){
		$(.'research-item').addClass('hide');
	};

	$('.btn-car').click(function(){
		hideAll();
		$(.'car').removeClass('.hide');
	});

	$('.btn-tracking').click(function(){
		hideAll();
		$('.tracking').removeClass('hide');
	});

	$('.btn-kinect').click(function(){
		hideAll();
		$('.kinect').removeClass('hide');
	})
});