'use strict';
angular.module('ngDay2App')
.controller('BaubCtrl', function($scope, $location, ShopService){
	$scope.createBauble = function(){
		$location.path('/newItem');
	};
	$scope.newBauble = function(bauble) {
		ShopService.createBaub(bauble)
		$location.path('/cart')
	};
	$scope.baubles = ShopService.queryBaub();
})
.controller('EditBaubCtrl', function($scope, $location, $routeParams, EditService){
	$scope.bauble = function(){
		EditService.delete({ id: $routeParams.id});
		$location.path('/cart');
	};
	$scope.edit = function(){
		EditService.edit($scope.post);
		$location.path('/cart');
	};
});
















// ----- below worked for initial CRUD HW, no longer works, reference to ngDay2App only change ------- //
// var shopApp = angular.module('ngDay2App')
// 	.controller ('BaubCtrl', ['$scope', '$routeParams', '$location', 'ShopService', function($scope, $routeParams, $location, ShopService){

// 			$scope.things = ShopService.getAllThings();
// 			$scope.addPost = function(){
// 				$location.path('/newItem');
// 			};

// 			// @params {thing} is an data object from cart.html object
// 			$scope.createThing = function(thing) {
// 				ShopService.createThing(thing);
// 				$location.path('/cart');
// 			};
// 	}]);