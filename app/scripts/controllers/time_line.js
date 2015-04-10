'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:TimeLineCtrl
 * @description
 * # TimeLineCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('TimeLineCtrl', function ($scope) {
    $scope.items = [
      {title:'离职-appgether', time:'2015-4-3'},
      {title:'宾果水果', time:'2015-3', img:'images/time_line/binguo.jpeg', url:'http://www.wandoujia.com/apps/com.bingofresh.mobile.user'},
      {title:'今日家电', time:'2014-11', img: 'images/time_line/jinri.jpeg', url: 'http://www.wandoujia.com/apps/com.appgether.jrappliances'},
      {title:'Hyper Neuro', time:'2014-08', img: 'images/time_line/hyperneuro.jpg', url: 'http://app.appgether.com/hyperneuro'},
      {title:'全课网', time:'2014-02', img:'images/time_line/quanke.jpg', url: 'http://app.appgether.com/coolschool'},
      {title:'鹰唛食品', time:'2014-02', img:'images/time_line/yingma.jpeg', url: 'http://www.wandoujia.com/apps/com.appgether.android.yingma.activity'},
      {title:'2013年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）决赛二等奖', time:'2013-12'},
      {title:'公司网站多语言版', time:'2013-06', url: 'http://www.appgether.com'},
      {title:'大专毕业', time:'2013-06-16'},
      {title:'android图片分享社交型应用', time:'2013-05', url: 'https://github.com/zewait/PhotoShare-Client'},
      {title:'入职appgether', time:'2013-03-06'},
      {title:'2013年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）初赛广东省赛区一等奖', time:'2013-04'},
      {title:'小游戏对战平台(毕计)', time:'2012-12', 'content': '俄罗斯方块,贪食蛇,吃豆人,坦克大战的联网版;没用到游戏引擎,UDP/TCP通信'},
      {title:'灯饰网站', time:'2012-07'},
      {title:'2012年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）决赛二等奖', time:'2012-12'},
      {title:'2012年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）初赛广东省赛区一等奖', time:'2012-04'},
      {title:'.....', time:'~'},
    ];

    $scope.itemClick = function($index) {
      var item = $scope.items[$index];
      if(item.url) {
        window.open(item.url);
      }
    };
  });
