$(document).ready(function() {
	$(window).scroll(function(event) {
		console.log($('html').scrollTop());
		if($('html').scrollTop()>180){
			$('.menu').addClass('menunho');
			$('.menu').removeClass('menuto');
			$('ul.nav.navbar-nav.hidden-ms-down.float-md-right').addClass('anho');
			$('ul.nav.navbar-nav.hidden-ms-down.float-md-right').removeClass('ato');
			$('.menu img').addClass('.menu imgto');
			$('.menu img').removeClass('.menu imgnho');
		}
		if($('html').scrollTop()<50){
			$('.menu').removeClass('menunho');
			$('.menu').addClass('menuto');
			$('ul.nav.navbar-nav.hidden-ms-down.float-md-right').removeClass('anho');
			$('ul.nav.navbar-nav.hidden-ms-down.float-md-right').addClass('ato');
			$('.menu img').removeClass('.menu imgto');
			$('.menu img').addClass('.menu imgnho');
		}
	});
	$(function() {
	// auto next slise sau time(s)
		var time=3000;
		var thoigian=setInterval(function(){
			$('.next').trigger('click');
		},time)

		// next on click
		$('.next ').on('click', function(event) {
			event.preventDefault();
			clearInterval(thoigian);
			var viTriXanh= $('.xanh').index()+1;
			if($('.activeslide').next().length==0){
				$('.cacnut li:nth-child('+viTriXanh+')').removeClass('xanh');
				$('.cacnut li:nth-child('+1+')').addClass('xanh');
				$('.nextDelay').addClass('delayNut');
				$('.prevDelay').addClass('delayNut');
				$('.activeslide').addClass('sangtrai');
				$('.activeslide').removeClass('activeslide');
				$('._1slide:nth-child(1)').addClass('activeslide');
				$('.activeslide').addClass('phaivao').one('webkitAnimationEnd', function(event) {
					$('.activeslide').removeClass('phaivao');
					$('._1slide:nth-child(2)').removeClass('sangtrai');
					$('.nextDelay').removeClass('delayNut');
					$('.prevDelay').removeClass('delayNut');
				});
			}else{
				$('.cacnut li:nth-child('+viTriXanh+')').removeClass('xanh');
				$('.cacnut li:nth-child('+viTriXanh+')').next().addClass('xanh');
				$('.nextDelay').addClass('delayNut');
				$('.prevDelay').addClass('delayNut');
				$('.activeslide').next().addClass('phaivao');
				$('.activeslide').addClass('sangtrai');
				$('.activeslide').removeClass('activeslide');
				$('.phaivao').addClass('activeslide').one('webkitAnimationEnd', function(event) {
					$('.activeslide').removeClass('phaivao');
					$('.activeslide').prev().removeClass('sangtrai');
					$('.nextDelay').removeClass('delayNut');
					$('.prevDelay').removeClass('delayNut');
				});
			}
		});

		// prev on click
		$('.prev').on('click', function(event) {
			event.preventDefault();
			clearInterval(thoigian);
			var viTriXanh= $('.xanh').index()+1;
			if($('.activeslide').prev().length==0){
				$('.cacnut li:nth-child('+viTriXanh+')').removeClass('xanh');
				$('.cacnut li:nth-child('+2+')').addClass('xanh');
				$('.nextDelay').addClass('delayNut');
				$('.prevDelay').addClass('delayNut');
				$('.activeslide').addClass('sangphai');
				$('.activeslide').removeClass('activeslide');
				$('._1slide:nth-child(2)').addClass('activeslide');
				$('.activeslide').addClass('traivao').one('webkitAnimationEnd', function(event) {
					$('.activeslide').removeClass('traivao');
					$('._1slide:nth-child(1)').removeClass('sangphai');
					$('.nextDelay').removeClass('delayNut');
					$('.prevDelay').removeClass('delayNut');
				});
			}else{
				$('.cacnut li:nth-child('+viTriXanh+')').removeClass('xanh');
				$('.cacnut li:nth-child('+viTriXanh+')').prev().addClass('xanh');
				$('.nextDelay').addClass('delayNut');
				$('.prevDelay').addClass('delayNut');
				$('.activeslide').addClass('sangphai');
				$('.activeslide').prev().addClass('traivao');
				$('.activeslide').removeClass('activeslide');
				$('.traivao').addClass('activeslide').one('webkitAnimationEnd', function(event) {
					$('.activeslide').removeClass('traivao');
					$('.activeslide').next().removeClass('sangphai');
					$('.nextDelay').removeClass('delayNut');
					$('.prevDelay').removeClass('delayNut');
				});
			}
		});

		//li on click
		$('li').on('click', function(event) {
			event.preventDefault();
			clearInterval(thoigian);
			if($('.xanh').index()!=$(this).index()){
				var xanhCu= $('.xanh').index()+1;
				$('.xanh').removeClass('xanh');
				$(this).addClass('xanh');
				var xanhMoi= $('.xanh').index()+1;
				$('._1slide:nth-child('+xanhCu+')').addClass('sangtrai');
				$('._1slide:nth-child('+xanhCu+')').removeClass('activeslide');
				
				$('._1slide:nth-child('+xanhMoi+')').addClass('activeslide');
				$('._1slide:nth-child('+xanhMoi+')').addClass('phaivao').one('webkitAnimationEnd', function(event) {
					$('._1slide:nth-child('+xanhCu+')').removeClass('sangtrai');
					$('._1slide:nth-child('+xanhMoi+')').removeClass('phaivao');
				});
			}
		});
	});
});