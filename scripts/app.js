angular
	.module("ngClassifieds", ["ngMaterial", "ui.router"])
	.config(function($mdThemingProvider, $stateProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$stateProvider
			.state('one', {
				url: '/stateone',
				template: '<h1>{{stateone.message}}</h1>',
				controller: 'stateOneCtrl as stateone'
			})
			.state('two', {
				url: '/statetwo',
				template: '<h1>StateTwo</h1> <md-button ui-sref="two.more">Deeper</md-button><ui-view></ui-view>',
				controller: 'stateTwoCtrl as statetwo'
			})	
			.state('two.more', {
				url: '/more',
				template: '<p>Nested State</p>'
			});		
	})

	.controller("stateOneCtrl", function() {
		var vm = this;
		vm.message = "hello from state one!";
	}

	);