// JavaScript Document

//script para que funcione al 100% el botón ir arriba
$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body,html').animate({ 
			scrollTop: '0px'
		} , 300);
	});
//invocamos al objeto (window) y a su método (scroll), solo se ejecutara si el usuario hace scroll en la página
$(window).scroll(function(){
  if( $(this).scrollTop() > 0){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
    $('.ir-arriba').slideDown(300); //se muestra el botón en 300 mili segundos
  } else { // si no
    $('.ir-arriba').slideUp(300); //se oculta el botón en 300 mili segundos
  }
});
});