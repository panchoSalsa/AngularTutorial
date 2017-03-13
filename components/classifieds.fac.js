(function() {

  "use strict";

  angular
    .module("ngClassifieds")
    .factory("classifiedsFactory", function($http) {

    	function getClassifieds() {
    		return $http.get('classifieds.json');
    	}

    	return {
    		getClassifieds: getClassifieds
    	}
    })
})();