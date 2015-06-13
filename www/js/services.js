angular.module('starter.services', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.factory('Accounts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var accounts = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return accounts;
    },
    remove: function(account) {
      accounts.splice(accounts.indexOf(account), 1);
    },
    get: function(accountId) {
      for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].id === parseInt(accountId)) {
          return accounts[i];
        }
      }
      return null;
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
