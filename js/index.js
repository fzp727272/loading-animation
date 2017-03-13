"use strict"

$(function() {
var  ajaxsucess = true;
function beginaction(){

$(".loading-condition-text").html("Fetch");

$("#loading-inner").attr({
	class: '',

});
$("#loading-sucess").attr({class:'loading-sucess-begin'});
$("#loading-failed").attr({class:'loading-failed-begin'});
$("#loading-text").removeClass('error').css({display:'inline-block'}).html(0);


	var maxstrokedasharray = 1000;
	var showstrokedasharray = 600;
	var speed = 5;
	var strokedasharray = maxstrokedasharray;
	var t;
	var num = 0;
	var numspeed = (maxstrokedasharray - showstrokedasharray) / speed;

	ajaxsucess = true;

	//test


	
	//test



	var action = function() {
		strokedasharray = strokedasharray - speed;
		
		num = num + 100 / numspeed;
		var shownum = parseInt(num);

	$("#loading-text").text(shownum);
		$("#loading-inner").css({
			'stroke-dashoffset': strokedasharray
		});
		if (strokedasharray > showstrokedasharray) {
			if (!ajaxsucess) {
				loadingerror();
				clearTimeout(t)
			} else {
				t = setTimeout(action, 10);
			}



		} else {

			clearTimeout(t);
			$("#loading-text").fadeOut(200);
			setTimeout(loadingsucess, 100);
				//loadingsucess();
				//loadingerror()

		}

	};

	var loadingsucess = function() {

		$("#loading-sucess").addClass('sucesstransition').removeClass('loading-sucess-begin').addClass('loading-sucess-complete')//.addClass('scaleobj');
		$(".loading-condition-text").html("All Good")//.addClass('scaleobj')

	};

	var loadingerror = function() {

		$("#loading-inner").addClass('error');
		$("#loading-text").fadeOut(200);
		$("#loading-text").addClass('error');

		function showerror() {


			$("#loading-failed").removeClass('loading-failed-begin').addClass('loading-failed-conplete').addClass('scaleobj');
			$(".loading-condition-text").html("Failed")//.addClass('scaleobj')
		}
		setTimeout(showerror, 300)

	}


action();}

$(".sucessbutton").click(function(event) {

	 beginaction();
});


$(".failedbutton").click(function(event) {

//console.log(ajaxsucess)
//	ajaxsucess = false
function errortest(){
	 ajaxsucess = false;
};
setTimeout(errortest, 600)
	 beginaction();	

});



})