angular.module('starter.controllers', [])
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('DashboardCtrl', function($scope) {})
.controller('BasicCtrl', function($scope, $localstorage) {
  $scope.user = $localstorage.getObject('activeUser');
})
.controller('MedicationCtrl', function($scope, $localstorage, Drugs, $ionicPopup) {
  $scope.activeMedics = 'medications_' + $localstorage.get('activeId');
  $scope.medications = $localstorage.getObject($scope.activeMedics) || [];
  $scope.showAddForm = false;
  $scope.medicine = '';
  $scope.medicineList = Drugs.names();
  $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Drug Conflict Detected!',
       template: ' Talk to your doctor before using ' + $scope.medicine + ' together with Baclofen. Combining these medications can increase the risk of an irregular heart rhythm that may be serious. You may need a dose adjustment or special tests to safely use both medications.'
     });
   };
  $scope.selectMedicine = function(med) {
    $scope.medicine = med;
  };
  $scope.addMedicine = function(dosage, frequency) {
    if (dosage.length === 0 || frequency.length === 0) {
      return;
    }
    $scope.medications.push({
      name: $scope.medicine,
      dosage: dosage,
      frequency: frequency
    });
    $localstorage.setObject($scope.activeMedics, $scope.medications);
    $scope.showAddForm = false;
    $scope.showAlert();
  };
})

.controller('ImmunizationCtrl', function($scope, $cordovaDatePicker, $localstorage) {
  
})
.controller('ReportsCtrl', function($scope, Camera, $localstorage) {
  $scope.activeReports = 'reports_' + $localstorage.get('activeId');
  $scope.reports = $localstorage.getObject($scope.activeReports) || [];
  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      $scope.reports.push(imageURI);
      $localstorage.setObject($scope.activeReports, $scope.reports);
    }, function(err) {
    });
  };
})
.controller('MedicalHistoryCtrl', function($scope) {})
.controller('AccountsCtrl', function($scope, Accounts, $localstorage, $state) {
  $scope.currentUser = 0;

  $scope.switchTo = function(accountId) {
    $scope.currentUser = accountId;
    $localstorage.set('activeId', accountId);
    $localstorage.setObject('activeUser', Accounts.get(accountId));
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
