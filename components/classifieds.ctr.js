(function() {

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope) {
      $scope.classified = {
      	title: "First Item",
      	price: "$1,000,000",
      	content:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
      }

      $scope.message = "hello world!";
    })
})();