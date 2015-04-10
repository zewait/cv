'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:LinkCtrl
 * @description
 * # LinkCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('LinkCtrl', function ($scope) {
    $scope.items = [
      {key: '电话', value: '13726040351'},
      {key: 'Email', value:'wait@h4fan.com'},
      {key: 'QQ', value: '773108248'}
    ];
  });
