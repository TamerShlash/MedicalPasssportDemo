angular.module('ionic.utils', []).factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);

angular.module('starter.services', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.factory('Accounts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var accounts = [{
    id: 0,
    primary: true,
    name: 'Susan Smith',
    picture: 'img/susan.png',
    gender: 'Female',
    age: 47, // TODO replace this with BirthDate
    blood: {
      type: 'AB',
      subtype: 'Rh Antigen +'
    },
    allergies: [
      { name: 'Cefditoren', level: 'low'    },
      { name: 'Penicillin', level: 'high'   },
      { name: 'Shellfish',  level: 'medium' }
    ],
    weight: 57,
    height: 165,
    bmi: {
      value: 20.93,
      level: 'normal'
    }
  }, {
    id: 1,
    name: 'Jane Smith',
    picture: 'img/jane.png',
    gender: 'Female',
    age: 12, // TODO replace this with BirthDate
    blood: {
      type: 'A',
      subtype: 'Rh Antigen +'
    },
    allergies: [
      { name: 'Shrimp', level: 'medium' }
    ],
    weight: 45,
    height: 145,
    bmi: {
      value: 21.40,
      level: 'normal'
    }
  }, {
    id: 2,
    name: 'Luca Smith',
    picture: 'img/luca.png',
    gender: 'Male',
    age: 6, // TODO replace this with BirthDate
    blood: {
      type: 'B',
      subtype: 'Rh Antigen +'
    },
    allergies: [
      { name: 'Cow Milk', level: 'low' }
    ],
    weight: 25,
    height: 110,
    bmi: {
      value: 20.66,
      level: 'normal'
    }
  }];

  return {
    all: function() {
      return accounts;
    },
    remove: function(account) {
      accounts.splice(accounts.indexOf(account), 1);
    },
    get: function(accountId) {
      return accounts.filter(function(x) { return x.id == accountId })[0];
    }
  };
})
.factory('Camera', ['$q', function($q) {
  return {
    getPicture: function(options) {
      var q = $q.defer();
      navigator.camera.getPicture(onPictureSuccess, onPictureFailure, options);
      function onPictureSuccess(result) {
        // Do any magic you need
        q.resolve(result);
      };
      function onPictureFailure(err) {
        q.reject(err);
      }
      return q.promise;
    },
    selectPicture: function(options) {
      var q = $q.defer();
      var options = {sourceType: 0}
      navigator.camera.getPicture(onPictureSuccess, onPictureFailure, options);
      function onPictureSuccess(result) {
        // Do any magic you need
        q.resolve(result);
      };
      function onPictureFailure(err) {
        q.reject(err);
      }
      return q.promise;
    }
  }
}]);
