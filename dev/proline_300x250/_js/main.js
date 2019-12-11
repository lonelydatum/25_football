
const start = ()=>{
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from('.t1a', .01, {opacity:0}, "+=.2")
	tl.from('.t1b', .01, {opacity:0}, "+=.6")


	const TIME = 6

	const tlPlayer = new TimelineMax()
	tlPlayer.from(".player_defend", TIME, {x:"-=15", y:"+=22", ease:Power3.easeOut}, 0)
	tlPlayer.from(".player_run", TIME, {x:"+=15", y:"+=22", ease:Power3.easeOut}, 0)

	tl.to('.frame1', .2, {opacity:0}, "+=1.6")

	tl.add("f2")
	tl.set(".frame2", {opacity:1})

	tl.add("phone")
	tl.from('.phone', .4, {y:"+=100", ease:Power2.easeOut}, "phone")
	tl.from('.illust', .3, {scale:0}, "phone+=.3")

	tl.from('.t2', .01, {opacity:0}, "+=.3")
	tl.from('.cta', .1, {opacity:0}, "+=1.8")
	tl.to('.cta', .2, {opacity:0}, "+=2.8")
	tl.from('.cta2', .3, {opacity:0})


	

	tl.from('.legal', .3, {opacity:0}, "+=1")

	tl.gotoAndPlay("f2")

}

start()



module.exports = {};

