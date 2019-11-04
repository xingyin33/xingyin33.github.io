$(document).ready(function(){
	console.log("I'm ready!");
	var urlParams = new URLSearchParams(window.location.search);
	var btnName = urlParams.get('btn');
	var hideAll = function(){
		$('.research-item').addClass('hide');
	};

	if (!!btnName) {
		console.log(btnName);
		hideAll();
		var className = '.'+btnName;
		console.log(className);
		$(className).removeClass('hide');
	}

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});


	$('.btn-all').click(function(){
		$('.research-item').removeClass('hide');
	});

	$('.btn-ds').click(function(){
		hideAll();

		$('.item-ds').removeClass('hide');
	});

	$('.btn-mario').click(function(){
		hideAll();

		$('.item-mario').removeClass('hide');
	});

	$('.btn-pc').click(function(){
		hideAll();

		$('.item-pc').removeClass('hide');
	});

	$('.btn-nes').click(function(){
		hideAll();

		$('.item-nes').removeClass('hide');
	});

	$('.btn-famicom').click(function(){
		hideAll();

		$('.item-famicom').removeClass('hide');
	});

	$('.btn-atari').click(function(){
		hideAll();

		$('.item-atari').removeClass('hide');
	});

	$('.btn-gameboy').click(function(){
		hideAll();

		$('.item-gameboy').removeClass('hide');
	});

	$('.btn-sega').click(function(){
		hideAll();

		$('.item-sega').removeClass('hide');
	});

	var cards = $(".research-item");
	for(var i = 0; i < cards.length; i++){
		var target = Math.floor(Math.random() * cards.length -1) + 1;
		var target2 = Math.floor(Math.random() * cards.length -1) +1;
		cards.eq(target).before(cards.eq(target2));
	}

});
