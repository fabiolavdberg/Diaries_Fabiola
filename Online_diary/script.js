
// note: check the .css, the height of the body is like 500%, so that
// there is something to scroll





$(window).on("scroll",function(e){

  var pos = $(window).height() - $(window).scrollTop();
  $(".img_01").css("top", $(window).height() +  pos/-1.5)
  $(".img_02").css("top", $(window).height() +  pos/-2)
  $(".img_03").css("top", $(window).height() +  pos/-1.5)
  $(".img_04").css("top", $(window).height() +  pos/-2.5)
  $(".img_05").css("top", $(window).height() +  pos/-1.5)
  $(".img_06").css("top", $(window).height() +  pos/-2)


});

function Smooth () {
	this.$container = document.querySelector('.levit-container');
	this.$placeholder = document.createElement('div');
}

Smooth.prototype.init = function () {
	var instance = this;

	setContainer.call(instance);
	setPlaceholder.call(instance);
	bindEvents.call(instance);
}

function bindEvents () {
	window.addEventListener('scroll', handleScroll.bind(this), false);
}

function setContainer () {
	var style = this.$container.style;

	style.position = 'fixed';
	style.width = '100%';
	style.top = '0';
	style.left = '0';
	style.transition = '0.5s ease-out';
}

function setPlaceholder () {
	var instance = this,
		$container = instance.$container,
		$placeholder = instance.$placeholder;

	$placeholder.setAttribute('class', 'levit-placeholder');
	$placeholder.style.height = $container.offsetHeight + 'px';
	document.body.insertBefore($placeholder, $container);
}

function handleScroll () {
	this.$container.style.transform = 'translateZ(0) translateY(' + (window.scrollY * (- 1)) + 'px)';
}

var smooth = new Smooth();
smooth.init();
//var pos = $(window).height() - $(window).scrollTop();
//$(".square-green").css("top",  pos/4)
//$(".square-red").css("top",  pos/2)
//$(".square-blue").css("top",  pos)
