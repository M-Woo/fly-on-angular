angular.module('FlyApp')
.factory('PlanesAPI', ['$http', function($http){
	return {
		getPlanes: function(){
			return $http.get('/api/airplanes');
		},
		getPlane: function(id){
			return $http.get('/api/airplanes/' + id);
		},
		addPlane: function(plane){
			$http.post('/api/airplanes', plane)
			.then(function success(res){
				console.log('successful add!');
				console.log(res);
				return res.data;
			}, function error(err){
				console.log('error!');
				console.log(err);
				return null;
			})
		},
		deletePlane: function(id){
			$http.delete('/api/airplanes/' + id)
			.then(function success(res){
				console.log('Successful Delete');
				console.log(res);
				return res.data
			}, function error(err){
				console.log('error!');
				console.log(err);
				return null
			})
			console.log('STUB');
		},
		updatePlane: function(plane){
			console.log('STUB');
		}
	}
}]);