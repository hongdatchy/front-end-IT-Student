$(document).ready(function() {
	var hieuungnoidung= new TimelineMax();
	TweenMax.from($('.menu .phai'), 1,{x:1350, opacity:0, delay:12})
	hieuungnoidung
	// 8.6
	.staggerFrom($('.khoiload'), 0.2,{scale:1, opacity:0},0.2)
	.staggerTo($('.khoiload'), 0.2,{scale:1, opacity:1,ease: Elastic.easeOut.config(1, 0.3)},0.2)
	.staggerTo($('.khoiload'), 0.2,{scale:1, opacity:0,ease: Elastic.easeOut.config(1, 0.3)},0.2)
	.staggerTo($('.khoiload'), 0.2,{scale:1, opacity:1,ease: Elastic.easeOut.config(1, 0.3)},0.2)
	.staggerTo($('.khoiload'), 0.2,{scale:1, opacity:0,ease: Elastic.easeOut.config(1, 0.3)},0.2)
	.staggerTo($('.khoiload'), 0.2,{scale:1, opacity:1,ease: Elastic.easeOut.config(1, 0.3)},0.2)
	.staggerTo($('.khoiload'), 0.2,{scale:1, opacity:0,ease: Elastic.easeOut.config(1, 0.3)},0.2)
	.staggerTo($('.load2'), 1,{scale:40, opacity:1})
	.staggerTo($('.loading'), 1,{x:-1350, opacity:0})

	.staggerFrom($('.header'), 0.8,{y:-33, opacity:0})
	.staggerFrom($('.benner'), 1,{x:-1350, opacity:0})
	.staggerFrom($('._4icon'), 1,{ opacity:0})
	.staggerTo($('._4icon'), 1,{scale:3, opacity:1})
	.staggerTo($('._4icon'), 1,{scale:1,x:700, opacity:1})
	.staggerFrom($('.menu .tren'), 1,{x:1350, opacity:0})
	.staggerFrom($('.menu .trai'), 1,{x:-300, opacity:0})
	

	.staggerFrom($('.bo11 .tren'), 1,{y: -200, opacity:0,ease: Elastic.easeOut.config(1, 0.3)})
	.staggerFrom($('.bo11 .duoi .trai'), 1,{x: -500, opacity:0,ease: Bounce.easeOut})
	.staggerFrom($('.wow'), 1,{y: 500, opacity:0,ease: Bounce.easeOut}, 0.2)

	.staggerFrom($('.bo12 .tren'), 1,{y: -200, opacity:0,ease: Elastic.easeOut.config(1, 0.3)})
	.staggerFrom($('.bo12 .duoi .trai'), 1,{x: -500, opacity:0,ease: Bounce.easeOut})
	.staggerFrom($('.wow2'), 1,{y: 500, opacity:0,ease: Bounce.easeOut}, 0.2)

	.staggerFrom($('.bo13 .tren'), 1,{y: -200, opacity:0,ease: Elastic.easeOut.config(1, 0.3)})
	.staggerFrom($('.bo13 .duoi .trai'), 1,{x: -500, opacity:0,ease: Bounce.easeOut})
	.staggerFrom($('.wow3'), 1,{y: 500, opacity:0,ease: Bounce.easeOut}, 0.2)
	.staggerFrom($('.bo2'), 1,{x: 500, opacity:0,ease: Bounce.easeOut}, 0.2)
	.staggerFrom($('.bo3'), 1,{x: 500, opacity:0,ease: Bounce.easeOut}, 0.2)
	.staggerFrom($('.bo4'), 1,{y: -100, opacity:0,ease: Bounce.easeOut}, 0.2);
});
