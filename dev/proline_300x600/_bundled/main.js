(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var start = function start() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.from('.t1a', .01, { opacity: 0 }, "+=.2");
	tl.from('.t1b', .01, { opacity: 0 }, "+=.6");

	var TIME = 6;

	var tlPlayer = new TimelineMax();
	tlPlayer.from(".player_defend", TIME, { x: "-=15", y: "+=22", ease: Power3.easeOut }, 0);
	tlPlayer.from(".player_run", TIME, { x: "+=15", y: "+=22", ease: Power3.easeOut }, 0);

	tl.to('.frame1', .2, { opacity: 0 }, "+=1.6");

	tl.add("f2");
	tl.set(".frame2", { opacity: 1 });

	tl.add("phone");
	tl.from('.phone', .4, { y: "+=100", ease: Power3.easeOut }, "phone");
	tl.from('.illust', .3, { scale: 0 }, "phone+=.3");

	tl.from('.t2', .01, { opacity: 0 }, "+=.3");
	tl.from('.cta', .1, { opacity: 0 }, "+=1.4");
	tl.to('.cta', .2, { opacity: 0 }, "+=2.3");
	tl.from('.cta2', .3, { opacity: 0 });

	tl.from('.legal', .3, { opacity: 0 }, "+=1");
	// tl.gotoAndPlay("f2")
};

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
