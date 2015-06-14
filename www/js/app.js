// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.utils', 'starter.controllers', 'starter.services'])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.run(function($ionicPlatform, $localstorage, Accounts) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    $localstorage.set('activeId', 0);
    $localstorage.setObject('activeUser', Accounts.get(0));
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/tab-dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('tab.basic', {
    url: '/basic',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/basic.html',
        controller: 'BasicCtrl'
      }
    }
  })

  .state('tab.medication', {
    url: '/medication',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/medication.html',
        controller: 'MedicationCtrl'
      }
    }
  })

  .state('tab.immunization', {
    url: '/immunization',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/immunization.html',
        controller: 'ImmunizationCtrl'
      }
    }
  })

  .state('tab.reports', {
    url: '/reports',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/reports.html',
        controller: 'ReportsCtrl'
      }
    }
  })

  .state('tab.medical-history', {
    url: '/medical-history',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/medical-history.html',
        controller: 'MedicalHistoryCtrl'
      }
    }
  })

  .state('tab.accounts', {
    url: '/accounts',
    views: {
      'tab-accounts': {
        templateUrl: 'templates/tab-accounts.html',
        controller: 'AccountsCtrl'
      }
    }
  })

  .state('tab.advice', {
    url: '/advice',
    views: {
      'tab-advice': {
        templateUrl: 'templates/tab-advice.html',
        controller: 'AdviceCtrl'
      }
    }
  })

  .state('tab.real-time', {
    url: '/real-time',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/real-time.html',
        controller: 'AdviceCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dashboard');

  $ionicConfigProvider.backButton.previousTitleText(false);

});
