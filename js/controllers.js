'use strict';

/* Controllers */

var skills = angular.module('myApp', []);

skills.controller('MainCtrl', function($scope) {
  $scope.skills = [
    {'name': 'html 5',
     'value': '60'},
    {'name': 'css 3',
     'value': '70'},
    {'name': 'photoshop',
     'value': '30'},
    {'name': 'jquery',
     'value': '50'},
    {'name': 'git',
     'value': '20'}
  ];
  $scope.items = [
	{'name': 'music',
	'descr': 'landing',
	'image': 'img/portfolio/5.jpg',
	'alt': 'music',
	'cat': '1',
	'link': 'music/index.html'},
	{'name': 'lambda',
	'descr': 'one page restaurant website',
	'image': 'img/portfolio/3.jpg',
	'alt': 'lambda',
	'cat': '3',
	'link': 'lambda/index.html'},
	{'name': 'linguamaster',
	'descr': 'landing',
	'image': 'img/portfolio/4.jpg',
	'alt': 'linguamaster',
	'cat': '1',
	'link': 'linguamaster/index.html'},
	{'name': 'csssr',
	'descr': 'form',
	'image': 'img/portfolio/1.jpg',
	'alt': 'csssr',
	'cat': '3',
	'link': 'csssr/index.html'},
	{'name': 'catering',
	'descr': 'old work',
	'image': 'img/portfolio/2.jpg',
	'alt': 'catering',
	'cat': '3',
	'link': 'catering/index.html'},
	{'name': 'lambda',
	'descr': 'one page restaurant website',
	'image': 'img/portfolio/3.jpg',
	'alt': 'lambda',
	'cat': '1',
	'link': 'lambda/index.html'},
	{'name': 'lambda',
	'descr': 'one page restaurant website',
	'image': 'img/portfolio/3.jpg',
	'alt': 'lambda',
	'cat': '3',
	'link': 'lambda/index.html'},
	];
});
