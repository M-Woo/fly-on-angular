angular.module('FlyApp')
.controller('PlanesCtrl', ['$scope', 'PlanesAPI', function($scope, PlanesAPI){
	$scope.title = 'Check out them Planes Yall'
	$scope.planes = [];

	PlanesAPI.getPlanes().then(function success(res){
		console.log('getPlanes!');
		console.log(res);
		$scope.planes = res.data;
	}, function error(err){
		console.log('error', err);
	})
}])
.controller('DetailCtrl', ['$scope', '$stateParams', 'PlanesAPI', function($scope, $stateParams, PlanesAPI) {
	$scope.plane = {};

	PlanesAPI.getPlane($stateParams.id).then(function success(res){
		console.log('success', res);
		$scope.plane = res.data;
	}, function error(err){
		console.log('error', err);
	})
}])
.controller('DeleteCtrl', ['$scope', '$stateParams', 'PlanesAPI', '$location', function($scope, $stateParams, PlanesAPI, $location){
	PlanesAPI.deletePlane($stateParams.id)
	$scope.delete = function() {
		$location.path('/')
	}
	// .then(function success(res){
	// 	console.log('success', res);
	// 	$scope.plane = res.data;
	// }, function error(err){
	// 	console.log('error', err);
	// })
}])
.controller('CreateCtrl', ['$scope', '$stateParams', 'PlanesAPI', '$location', function($scope, $stateParams, PlanesAPI, $location){
	$scope.enter = function() {
		$location.path('/allPlanes')
		var plane = {
			'manufacturer': this.manufacturer,
			'model': this.model,
			'engines': this.engines,
			'url': this.url
		}
		PlanesAPI.addPlane(plane)
		// .then(function success(res){
		// 	console.log('success', res);
		// }, function error(err){
		// 	console.log('error', err)
		// })
	}
}])



.filter('fixGrammar', function(){
	return function(input){
		if(input == 1){
			return '1 engine';
		}
		else {
			return input + ' engines';
		}
	} 
})