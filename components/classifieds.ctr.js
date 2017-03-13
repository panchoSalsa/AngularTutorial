(function() {

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

        var vm = this;

        vm.openSidebar = openSidebar;
        vm.editClassified = editClassified;
        vm.deleteClassified = deleteClassified;
        vm.closeSidebar = closeSidebar;
        vm.saveEdit = saveEdit;
        vm.saveClassified = saveClassified;

        vm.categories;
        vm.classifieds;
        vm.editing;

    	classifiedsFactory.getClassifieds()
    		.then(function(classifieds) {
    			vm.classifieds = classifieds.data;
    			vm.categories = getCategories(vm.classifieds);
    		});
    	
    	var contact = {
    		name: "Francisco Franco",
    		phone: "(555) 555-5555",
    		email: "frfranco@penn.edu"
    	};

    	function openSidebar() {
    		$mdSidenav('left').open();
    	};

    	function closeSidebar() {
    		$mdSidenav('left').close();
    	};

        function saveClassified(classified) {
    		if (classified) { // at least one property on object before saving
    			classified.contact = contact;
				vm.classifieds.push(classified);
				vm.classified = {};
				closeSidebar();
				showToast("Classified saved!");
    		}
    	};

    	function editClassified(classified) {
    		vm.editing = true;
    		openSidebar();
    		vm.classified = classified;
    	};

    	function saveEdit() {
			vm.editing = false;
			vm.classified = {};
			closeSidebar();
			showToast("Edit saved!");
    	};

    	function showToast(message) {
			$mdToast.show(
				$mdToast.simple()
					.content(message)
					.position('top, right')
					.hideDelay(3000)
			);
    	};

    	function deleteClassified(event, classified) {
    		var confirm = $mdDialog.confirm()
    			.title('are you sure you want to delete ' + classified.title + '?')
    			.ok('Yes')
    			.cancel('No')
    			.targetEvent(event)

    		$mdDialog.show(confirm)
    			.then(function() {
    				var index = vm.classifieds.indexOf(classified);
    				vm.classifieds.splice(index,1);
    			}, function() {

    			});
    	};

    	function getCategories(classifieds) {
    		var categories = [];

    		angular.forEach(classifieds, function(item) {
    			angular.forEach(item.categories, function(category) {
    				categories.push(category);
    			});
    		});

    		return _.uniq(categories);
    	};

    })
})();