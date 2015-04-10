'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:ShowFollowBottomSheetCtrl
 * @description
 * # ShowFollowBottomSheetCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('ShowFollowBottomSheetCtrl', function ($scope, $mdBottomSheet, $mdDialog) {
    $scope.items = [
      {name: 'Blog', icon:'blogger', url:'http://blog.h4fan.com'},
      {name: 'Github', icon:'github', url:'https://github.com/zewait'},
      {name: 'Weibo', icon: 'weibo', url: 'http://www.weibo.com/u/1760989620'},
      {name: 'Message', icon: 'message', url:'sms:13726040351'},
      {name: 'Mail', icon: 'mail', url: 'mailto:wait@h4fan.com'},
      //{name: 'Twitter', icon: 'twitter', url: ''},
      //{name: 'Google+', icon: 'google-plus', url: 'https://www.facebook.com/profile.php?id=100005005471274'},
      {name: 'FB', icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=100005005471274'}
    ];

    function tagAClick(url) {
        var a = document.createElement('a');
        a.href= url;
        a.click();
    }
    $scope.listItemClick = function($index, $event) {
      var item = $scope.items[$index];
      console.dir(item);
      $mdBottomSheet.hide($index);
      if(item.url) {
        if(-1!=item.url.indexOf('sms')) {
          if(!device.desktop || (device.iOS || device.android || device.windowsPhone)) {
            tagAClick(item.url);
          } else {
            $mdDialog.show(
              $mdDialog.alert()
                .title('当前设备不能发短信')
                .content('请使用手机再试')
                .ok('好')
                .targetEvent($event)
            );
          }
        } else if(-1!=item.url.indexOf('mailto')) {
          tagAClick(item.url);
        } else {
          window.open(item.url);
        }
        
      }
    };
  });
