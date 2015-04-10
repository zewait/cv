'use strict';

/**
 * @ngdoc overview
 * @name cvApp
 * @description
 * # cvApp
 *
 * Main module of the application.
 */
angular
  .module('cvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAria',
    'angular-timeline',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('yellow')
      .dark();
    $mdIconProvider
      .icon('mail', 'images/icons/mail.svg', 24)
      .icon('blogger', 'images/icons/blogger2.svg', 24)
      .icon('github', 'images/icons/github.svg', 24)
      .icon('google-plus', 'images/icons/google-plus2.svg', 24)
      .icon('instagram', 'images/icons/instagram.svg', 24)
      .icon('weibo', 'images/icons/weibo.svg', 24)
      .icon('message', 'images/icons/message.svg', 24)
      .icon('facebook', 'images/icons/facebook.svg', 24)
      .icon('twitter', 'images/icons/twitter.svg', 24);


    $routeProvider
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/skill', {
        templateUrl: 'views/skill.html',
        controller: 'SkillCtrl'
      })
      .when('/link', {
        templateUrl: 'views/link.html',
        controller: 'LinkCtrl'
      })
      .when('/time_line', {
        templateUrl: 'views/time_line.html',
        controller: 'TimeLineCtrl'
      })
      .otherwise({
        redirectTo: '/info'
      });
  })
	.run(function($rootScope, $http, $location, $templateCache, $mdBottomSheet, $mdSidenav){
    $rootScope.figure = {
      name: '黄世凡',
      sex: '男',
      work_experlence: '2年1个月',
      expectation_job: 'Android程序员',
      born: '1991年',
      education: '大专',
      nationality: '中国',
      status: '离职',
      address: '广东省中山市沙溪镇',
      avatar: 'images/avatar.jpg',
      email: 'wait.h4fan@com',
      blog: 'http://blog.h4fan.com'
    };

    $rootScope.menus = [
      {name: '个人信息', url:'/info'},
      {name: 'Time Line', url:'/time_line'},
      {name: '技能清单', url:'/skill'},
      {name: '联系方式', url:'/link'}
    ];

    var urls = [
      $rootScope.figure.avatar,
      'images/icons/ic_remove_red_eye.svg',
      'images/icons/blogger2.svg',
      'images/icons/github.svg',
      'images/icons/google-plus2.svg',
      'images/icons/instagram.svg',
      'images/icons/mail.svg',
      'images/icons/message.svg',
      'images/icons/facebook.svg',
      'images/icons/twitter.svg',
      'images/icons/weibo.svg',
      'views/show_follow_bottom_sheet.html',
      'views/info.html',
      'views/skill.html',
      'views/link.html',
      'views/time_line.html',
    ];
    angular.forEach(urls, function(url){
      $http.get(url, {cache: $templateCache});
    });


    $rootScope.showFollowBottomSheet = function($event) {
      $mdBottomSheet.show({
        templateUrl: 'views/show_follow_bottom_sheet.html',
        controller: 'ShowFollowBottomSheetCtrl',
        targetEvent: $event
      });
    };

    $rootScope.toggleLeftNav = function() {
      $mdSidenav('left').toggle();
    };

    $rootScope.leftNavMenuClick = function($index) {
      var menu = $rootScope.menus[$index];
      $location.path(menu.url);
      $mdSidenav('left').close();
    };
  });










