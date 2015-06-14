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
      return JSON.parse($window.localStorage[key] || null);
    }
  }
}]);

angular.module('starter.services', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.factory('Accounts', function() {
  // Some fake testing data
  var accounts = [{
    id: 0,
    primary: true,
    name: 'Susan Smith', picture: 'img/susan.png',
    gender: 'Female', age: 35, // TODO replace this with BirthDate
    blood: { type: 'AB', subtype: 'Rh Antigen +' },
    allergies: [
      { name: 'Cefditoren', level: 'low'    },
      { name: 'Penicillin', level: 'high'   },
      { name: 'Shellfish',  level: 'medium' }
    ],
    weight: 57, height: 165,
    bmi: { value: 20.93, level: 'normal' },
    medications: [],
    reports: [],
    immunizations: [],
    history: [
      { name: 'Appendicitis',         date: 'Jan 2013'  },
      { name: 'Hypertension',         date: 'Nov 2008' },
      { name: 'Influenza',            date: 'May 2004'  },
      { name: 'hyperlipidemia',       date: 'Mar 2000'  },
      { name: 'Wisdom Tooth Removal', date: 'Feb 1998'  }
    ]
  }, {
    id: 1,
    name: 'Jane Smith', picture: 'img/jane.png',
    gender: 'Female', age: 12,
    blood: { type: 'A', subtype: 'Rh Antigen +' },
    allergies: [
      { name: 'Shrimp', level: 'medium' }
    ],
    weight: 45, height: 145,
    bmi: { value: 21.40, level: 'normal' },
    medications: [],
    reports: [],
    immunizations: [],
    history: []
  }, {
    id: 2,
    name: 'Luca Smith', picture: 'img/luca.png',
    gender: 'Male', age: 6,
    blood: { type: 'B', subtype: 'Rh Antigen +' },
    allergies: [
      { name: 'Cow Milk', level: 'low' }
    ],
    weight: 25, height: 110,
    bmi: { value: 20.66, level: 'normal' },
    medications: [],
    reports: [],
    immunizations: [],
    history: []
  }];

  return {
    all: function() {
      return accounts;
    },
    remove: function(account) {
      accounts.splice(accounts.indexOf(account), 1);
    },
    get: function(accountId) {
      return accounts.filter(function(i) { return i.id == accountId })[0];
    }
  };
})
.factory('Drugs', function() {
  // Some fake testing data
  var drugs = [
    { name: 'Acebutolol',       photo: 'drug.png', company: '' },
    { name: 'Acnocin',          photo: '', company: '' },
    { name: 'Adrenaline',       photo: '', company: '' },
    { name: 'Aspirin',          photo: '', company: '' },
    { name: 'Baclofen',         photo: '', company: '' },
    { name: 'Buscopan',         photo: '', company: '' },
    { name: 'Calcitriol',       photo: '', company: '' },
    { name: 'Calcium Acetate',  photo: '', company: '' },
    { name: 'Epivir',           photo: '', company: '' },
    { name: 'Gabapentin',       photo: '', company: '' },
    { name: 'Glipizide',        photo: '', company: '' },
    { name: 'Imodium',          photo: '', company: '' },
    { name: 'Lamivudine',       photo: '', company: '' },
    { name: 'Lactase Fast Act', photo: '', company: '' },
    { name: 'Lasix',            photo: '', company: '' },
    { name: 'Lipitor',          photo: '', company: '' },
    { name: 'Madopar',          photo: '', company: '' },
    { name: 'Meiact',           photo: '', company: '' },
    { name: 'Metformin',        photo: '', company: '' },
    { name: 'Nexium',           photo: '', company: '' },
    { name: 'Penicillin',       photo: '', company: '' },
    { name: 'Rapifen',          photo: '', company: '' },
    { name: 'Singulair',        photo: '', company: '' },
    { name: 'Tamiflu',          photo: '', company: '' },
    { name: 'Warfarin',         photo: '', company: '' },
    { name: 'Xyzal',            photo: '', company: '' },
    { name: 'Zyloric',          photo: '', company: '' }
  ];
  return {
    all: function() {
      return drugs;
    },
    names: function() {
      return drugs.map(function(med) { return med.name; });
    },
    remove: function(drug) {
      drugs.splice(drugs.indexOf(drug), 1);
    },
    get: function(drugName) {
      return drugs.filter(function(i) { return i.name == drugName })[0];
    }
  };
})
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();
      function onSuccess(result) {
        console.log(result);
        // Do any magic you need
        q.resolve(result);
      };
      function onFailure(result) {
        q.reject(err);
      }
      navigator.camera.getPicture(onSuccess, onFailure, options);
      return q.promise;
    }
  }
}]);
