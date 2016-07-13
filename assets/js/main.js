//Scrolling to page sections
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
});


// Countdown clock
var endDate = "August 23, 2016 EST";     // Set end date


 // Calculate the difference
 function calculateTime(endDate) {
     var t = Date.parse(endDate) - Date.parse(new Date());
     var seconds = Math.floor((t/1000) % 60);
     var minutes = Math.floor((t/1000/60) % 60);
     var hours = Math.floor((t/(1000*60*60)) % 24);
     var days = Math.floor((t/(1000*60*60*24)));

     return{
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     };
 };

function initializeCountdown(id,endDate) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock(){
        var t = calculateTime(endDate);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }
    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000);
};

initializeCountdown('count-down',endDate);


var btn = document.getElementById("btn-drop");
var drop = document.getElementById("drop-down-menu");

btn.addEventListener("click", function () {
    drop.classList.toggle("menu-displayed");
    btn.classList.toggle("menu-displayed");

});


// Slider

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    var y = document.getElementsByClassName("slider-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
      y[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} {
        x[slideIndex-1].style.display = 'flex';
        y[slideIndex-1].classList.add('active');
    }

    setTimeout(carousel, 10000); // Change image every 5 seconds
};


// Gallery Modal

var img = document.getElementsByClassName("gall-img");
var over = document.getElementById("overlay");
var mimg = document.getElementById("modal-img");

var modal = function() {

    mimg.src = this.src;
    over.style.opacity='1';
    over.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

};

for(var i = 0; i < img.length; i++) {
    img[i].addEventListener("click", modal, false)
}

var close = document.getElementById("close-modal");

close.addEventListener("click", function() {

    document.getElementById("overlay").style.opacity = '0.0';
    document.getElementById("overlay").style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';

});



over.addEventListener("click", function (event) {

    if (event.target == this){

        document.getElementById("overlay").style.opacity = '0.0';
        document.getElementById("overlay").style.pointerEvents = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
    };


});

// Registry Modal

var reg = document.getElementById("registry-btn");
var reg_drop = document.getElementById("registry-btn-drop");
var over_reg = document.getElementById("overlay-reg");

var modal_reg = function() {

    over_reg.style.opacity='1';
    over_reg.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

};

reg.addEventListener("click", modal_reg);
reg_drop.addEventListener("click", modal_reg);


var close_reg = document.getElementById("close-modal-reg");

close_reg.addEventListener("click", function() {

    document.getElementById("overlay-reg").style.opacity = '0.0';
    document.getElementById("overlay-reg").style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';

});



over_reg.addEventListener("click", function (event) {

    if (event.target == this){

        document.getElementById("overlay-reg").style.opacity = '0.0';
        document.getElementById("overlay-reg").style.pointerEvents = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
    };


});

// RSVP Modal

$("#rsvp-submit").click(modal_rsvp)

var modal_rsvp = function(event) {

		event.preventDefault();

    $("#overlay-rsvp").style.opacity='1';
    $("#overlay-rsvp").style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

};


$("#close-modal-rsvp").click( function() {

  $("#overlay-rsvp").style.opacity='0.0';
  $("#overlay-rsvp").style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';

});



$("overlay-rsvp").click(function (event) {

    if (event.target == this){

        document.getElementById("overlay-rsvp").style.opacity = '0.0';
        document.getElementById("overlay-rsvp").style.pointerEvents = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
    };


});
