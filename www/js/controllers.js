angular.module('starter.controllers', [])
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('DashboardCtrl', function($scope) {})
.controller('BasicCtrl', function($scope, $localstorage) {
  $scope.user = $localstorage.getObject('activeUser');
})
.controller('MedicationCtrl', function($scope, $localstorage, Drugs) {
  $scope.activeMedics = 'medications_' + $localstorage.get('activeId');
  $scope.medications = $localstorage.getObject($scope.activeMedics) || [];
  $scope.showAddForm = false;
  $scope.medicine = '';
  $scope.medicineList = Drugs.names();
  $scope.selectMedicine = function(med) {
    $scope.medicine = med;
  };
  $scope.addMedicine = function(dosage, frequency) {
    $scope.medications.push({
      name: $scope.medicine,
      dosage: dosage,
      frequency: frequency
    });
    $localstorage.setObject($scope.activeMedics, $scope.medications);
    $scope.showAddForm = false;
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
