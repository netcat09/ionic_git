/**
 * Created by netcat on 20.12.16.
 */
angular.module('starter.services', [])

.service('API', function ($http, $q) {
  return {
    getGitRepo: function () {

      var d = $q.defer();
      $http({
        metod: 'GET',
        url: 'https://api.github.com/repositories'

      }).then(function (data) {
        var repos = data.data;
        d.resolve(repos)
      });

      return d.promise;
      console.log(repos);
    },

    getGitRepoInfo: function (owner, login) {
      console.log(owner, login);
      var url = 'https://api.github.com/repos/'+ login + '/' + owner + '/commits';
      var d = $q.defer();
      $http({
        metod: 'GET',
        url: url
      }).then(function (data) {
        var repInfo = data.data;
        d.resolve(repInfo);
      })
      return d.promise;
    }
  }
});
