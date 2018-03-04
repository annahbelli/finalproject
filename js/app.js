// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded 
	$( document ).ready(function() {
  // Handler for .ready() called.
	});


// Listen for click on the PIZZA button

	$('.pizza-nav').click(function(event){
	event.preventDefault();

// When the PIZZA button is clicked, change the cat picture
        $('#cat-image').attr('src','images/cat-pizza.png');

// And show the correct content (and hide any other content)
		$('.holder').slideUp().addClass('hide');
		if ($('.pizza-holder').hasClass('hide')){
		$('.pizza-holder').slideDown().removeClass('hide');
		$('html, body').animate({
    		scrollTop: $("#master-holder").offset().top
		}, 1000);
	} else {
		$('.pizza-holder').slideUp().addClass('hide');
	}

});


// Listen for click on the PENCIL button

	$('.pencil-nav').click(function(event){
	event.preventDefault();

// When the PENCIL button is clicked, change the cat picture
        $('#cat-image').attr('src','images/cat-newspaper.png');

// And show the correct content (and hide any other content)
		$('.holder').slideUp().addClass('hide');
		if ($('.work-holder').hasClass('hide')){
		$('.work-holder').slideDown().removeClass('hide');
		$('html, body').animate({
    		scrollTop: $("#master-holder").offset().top
		}, 1000);
	} else {
		$('.work-holder').slideUp().addClass('hide');
	}

});


// Listen for click on the BREAD button

	$('.bread-nav').click(function(event){
	event.preventDefault();

// When the BREAD button is clicked, change the cat picture
        $('#cat-image').attr('src','images/cat-bread.png');

// And show the correct content (and hide any other content)
		$('.holder').slideUp().addClass('hide');
		if ($('.bread-holder').hasClass('hide')){
		$('.bread-holder').slideDown().removeClass('hide');
		$('html, body').animate({
    		scrollTop: $("#master-holder").offset().top
		}, 1000);
	} else {
		$('.bread-holder').slideUp().addClass('hide');
	}

});


// Listen for click on the LLAMA button

	$('.llama-nav').click(function(event){
	event.preventDefault();

// When the LLAMA button is clicked, change the cat picture
        $('#cat-image').attr('src','images/cat-lima.png');

// And show the correct content (and hide any other content)
		$('.holder').slideUp().addClass('hide');
		if ($('.peru-holder').hasClass('hide')){
		$('.peru-holder').slideDown().removeClass('hide');
		$('html, body').animate({
    		scrollTop: $("#master-holder").offset().top
		}, 1000);
	} else {
		$('.peru-holder').slideUp().addClass('hide');
	}

});



// MOBILE SECTION

// Mobile Nav

  var hamburger = document.querySelector('#hamburger');

  var mNav = document.querySelector('.mobilenav');

  hamburger.onclick = function(){

    var status = mNav.classList.contains('active');

    if(!status) {
      mNav.classList.add('active');
    } else {
      mNav.classList.remove('active');
    }
  }



