angular
	.module("ngClassifieds", ["ngMaterial", "ui.router"])
	.config(function($mdThemingProvider, $stateProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$stateProvider
			.state('one', {
				url: '/stateone',
				template: '<h1>StateOne</h1>'
			})
			.state('two', {
				url: '/statetwo',
				template: '<h1>StateTwo</h1> <md-button ui-sref="two.more">Deeper</md-button><ui-view></ui-view>'
			})	
			.state('two.more', {
				url: '/more',
				template: '<p>Nested State</p>'
			});		
	})
	.directive("helloWorld", function() {
		return {
			template: "<h1>{{message}}</h1>"
		};
	});