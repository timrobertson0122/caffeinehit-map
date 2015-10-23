var app = angular.module('caffeinehit', [
	'ionic',
	'ngMap',
	'ngCordova',
	'caffeinehit.controllers',
	'caffeinehit.services',
	'caffeinehit.filters',
	'ngIOS9UIWebViewPatch'
]);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDarkContent();
		}
	});
});

app.config(function ($httpProvider) {
	$httpProvider.defaults.headers.common['Authorization'] = 'Token 7bdc92630b57440cc18fa3d86be0e9b1ee9fe412';
});