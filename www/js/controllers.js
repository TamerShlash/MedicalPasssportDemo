angular.module('starter.controllers', [])
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('DashboardCtrl', function($scope) {})
.controller('BasicCtrl', function($scope) {})
.controller('MedicationCtrl', function($scope) {})
.controller('ImmunizationCtrl', function($scope) {})
.controller('ReportsCtrl', function($scope, Camera) {
  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      $scope.takenPhotoUri = imageURI;
    }, function(err) {
    });
  };
  $scope.selectPhoto = function() {
    Camera.selectPicture().then(function(imageURI) {
      $scope.takenPhotoUri = imageURI;
    }, function(err) {
    });
  };
})
.controller('MedicalHistoryCtrl', function($scope) {})

.controller('AccountsCtrl', function($scope, Accounts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.accounts = Accounts.all();
  $scope.remove = function(account) {
    Accounts.remove(account);
  }
})

.controller('AccountSwitchCtrl', function($scope, $stateParams, Accounts) {
  // $scope.chat = Accounts.get($stateParams.chatId);
})

.controller('AdviceCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
