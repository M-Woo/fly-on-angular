console.log('main.js running!')
angular.module('FlyApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/404');


	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'app/views/planes.html',
	})
	.state('allPlanes', {
		url: '/allPlanes',
		templateUrl: 'app/views/allPlanes.html',
		controller: 'PlanesCtrl'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'app/views/about.html'
	})
	.state('plane', {
		url: '/plane/:id',
		templateUrl: 'app/views/details.html',
		controller: 'DetailCtrl'
	})
	.state('404', {
		url: '/404',
		templateUrl: 'app/views/404.html'
	})
	.state('delete', {
		url: '/delete/:id',
		templateUrl: 'app/views/delete.html',
		controller: 'DeleteCtrl'
	})
	.state('create', {
		url: '/create',
		templateUrl: 'app/views/create.html',
		controller: 'CreateCtrl'
	})
	$locationProvider.html5Mode(true);
}]);



