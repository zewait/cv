'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:SkillCtrl
 * @description
 * # SkillCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('SkillCtrl', function ($scope) {
    $scope.items = [
      {key: 'Web开发', value: 'Java/Node(io.js)/Python'},
      {key: 'Web框架', value: 'struts2/hibernate/spring/spring mvc/express/koa/flask'},
      {key: '前端框架', value: 'Bower/Grunt/Yo/Gulp'},
      {key: '数据库相关', value: 'Mysql/MongoDB/SQLite'},
      {key: '版本管理', value: 'SVN/Git'},
      {key: '单元测试', value: 'JUnit/Karma'},
      {key: '移动开发', value: 'Android/NDK/React Native/Hybrld App'},
      {key: '游戏开发', value: 'Cocos2dx/Phaser'},
    ];
  });
