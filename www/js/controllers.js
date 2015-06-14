angular.module('starter.controllers', [])
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('DashboardCtrl', function($scope) {})
.controller('BasicCtrl', function($scope, $localstorage) {
  $scope.auid = $localstorage.get('activeId');
  $scope.user = $localstorage.getObject('account_' + $scope.auid);
})
.controller('MedicationCtrl', function($scope, $localstorage, Drugs, $ionicPopup) {
  $scope.auid = $localstorage.get('activeId');
  $scope.user = $localstorage.getObject('account_' + $scope.auid);
  $scope.showAddForm = false;
  $scope.medicine = '';
  $scope.medicineList = Drugs.names();
  $scope.showAlert = function() {
    if ($scope.medicine == 'Aspirin') {
     var alertPopup = $ionicPopup.alert({
       title: 'Drug Conflict Detected!',
       template: ' Talk to your doctor before using ' + $scope.medicine + ' together with Baclofen. Combining these medications can increase the risk of an irregular heart rhythm that may be serious. You may need a dose adjustment or special tests to safely use both medications.'
     });
    }
   };
  $scope.selectMedicine = function(med) {
    $scope.medicine = med;
  };
  $scope.addMedicine = function(dosage, frequency) {
    if (dosage.length === 0 || frequency.length === 0) {
      return;
    }
    $scope.user.medications.push({
      name: $scope.medicine,
      dosage: dosage,
      frequency: frequency
    });
    $localstorage.setObject('account_' + $scope.auid, $scope.user);
    $scope.showAddForm = false;
    $scope.showAlert();
  };
})
.controller('ImmunizationCtrl', function($scope, $localstorage) {
  $scope.auid = $localstorage.get('activeId');
  $scope.user = $localstorage.getObject('account_' + $scope.auid);
})
.controller('ReportsCtrl', function($scope, Camera, $localstorage) {
  $scope.auid = $localstorage.get('activeId');
  $scope.user = $localstorage.getObject('account_' + $scope.auid);
  $scope.showForm = false;
  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      $scope.reportImage = imageURI;
      $localstorage.setObject('account_' + $scope.auid, $scope.user);
      $scope.showForm = true;
    }, function(err) {
    });
  };
  $scope.addReport = function(title, date) {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'];
    $scope.user.reports.push({
      title: title,
      date: months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(),
      image: $scope.reportImage
    });
    $scope.showForm = false;
  };
})
.controller('MedicalHistoryCtrl', function($scope, $localstorage) {

  $scope.auid = $localstorage.get('activeId');
  $scope.user = $localstorage.getObject('account_' + $scope.auid);
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  $scope.addCase = function(name, date) {
    $scope.user.history.push({
      name: name,
      date: months[date.getMonth()-1] + '/' + date.getFullYear()
    })
  }
})
.controller('AccountsCtrl', function($scope, $localstorage) {
  $scope.auid = 0;
  $scope.accounts = $localstorage.getObject('accountList');
  $scope.switchTo = function(accountId) {
    $scope.auid = accountId;
    $localstorage.set('activeId', accountId);
  }
})
.controller('AdviceCtrl', function($scope) {});
