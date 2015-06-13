angular.module('starter.controllers', [])
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('DashboardCtrl', function($scope) {})
.controller('BasicCtrl', function($scope, $localstorage) {
  $scope.user = $localstorage.getObject('activeUser');
})
.controller('MedicationCtrl', function($scope) {
  $scope.showAddForm = false;
  $scope.medicineName = '';
  $scope.medicine = '';
  $scope.medicineList = [
    'Lipitor',
    'Cozaar',
    'Meiact'
  ];
  $scope.selectMedicine = function (med) {
    $scope.medicine = med;
  };
})
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

.controller('AccountsCtrl', function($scope, Accounts, $localstorage, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.switchTo = function(accountId) {
    $localstorage.set('activeId', accountId);
    $localstorage.setObject('activeUser', Accounts.get(accountId));
    $state.go('tab.dashboard');
  }
  
  $scope.accounts = Accounts.all();
  $scope.remove = function(account) {
    Accounts.remove(account);
  }
})

.controller('AdviceCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
