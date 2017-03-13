(function() {

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http) {

    	$http.get('classifieds.json')
    		.then(function(classifieds) {
    			$scope.classifieds = classifieds.data;
    		});
    })
})();