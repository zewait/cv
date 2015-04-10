function _checkOS(){var a=navigator.userAgent;/Playstation Vita/.test(a)?device.vita=!0:/Kindle/.test(a)||/\bKF[A-Z][A-Z]+/.test(a)||/Silk.*Mobile Safari/.test(a)?device.kindle=!0:/Android/.test(a)?device.android=!0:/CrOS/.test(a)?device.chromeOS=!0:/iP[ao]d|iPhone/i.test(a)?device.iOS=!0:/Linux/.test(a)?device.linux=!0:/Mac OS/.test(a)?device.macOS=!0:/Windows/.test(a)&&(device.windows=!0,/Windows Phone/i.test(a)&&(device.windowsPhone=!0));var b=/Silk/.test(a);(device.windows||device.macOS||device.linux&&!b||device.chromeOS)&&(device.desktop=!0),(device.windowsPhone||/Windows NT/i.test(a)&&/Touch/i.test(a))&&(device.desktop=!1)}var device={};_checkOS(),angular.module("cvApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngAria","angular-timeline","ngMaterial"]).config(["$routeProvider","$mdIconProvider","$mdThemingProvider",function(a,b,c){c.theme("dark","default").primaryPalette("yellow").dark(),b.icon("mail","images/icons/mail.svg",24).icon("blogger","images/icons/blogger2.svg",24).icon("github","images/icons/github.svg",24).icon("google-plus","images/icons/google-plus2.svg",24).icon("instagram","images/icons/instagram.svg",24).icon("weibo","images/icons/weibo.svg",24).icon("message","images/icons/message.svg",24).icon("facebook","images/icons/facebook.svg",24).icon("twitter","images/icons/twitter.svg",24),a.when("/info",{templateUrl:"views/info.html",controller:"InfoCtrl"}).when("/skill",{templateUrl:"views/skill.html",controller:"SkillCtrl"}).when("/link",{templateUrl:"views/link.html",controller:"LinkCtrl"}).when("/time_line",{templateUrl:"views/time_line.html",controller:"TimeLineCtrl"}).otherwise({redirectTo:"/info"})}]).run(["$rootScope","$http","$location","$templateCache","$mdBottomSheet","$mdSidenav",function(a,b,c,d,e,f){a.figure={name:"黄世凡",sex:"男",work_experlence:"2年1个月",expectation_job:"Android程序员",born:"1991年",education:"大专",nationality:"中国",status:"离职",address:"广东省中山市沙溪镇",avatar:"images/avatar.jpg",email:"wait.h4fan@com",blog:"http://blog.h4fan.com"},a.menus=[{name:"个人信息",url:"/info"},{name:"Time Line",url:"/time_line"},{name:"技能清单",url:"/skill"},{name:"联系方式",url:"/link"}];var g=[a.figure.avatar,"images/icons/ic_remove_red_eye.svg","images/icons/blogger2.svg","images/icons/github.svg","images/icons/google-plus2.svg","images/icons/instagram.svg","images/icons/mail.svg","images/icons/message.svg","images/icons/facebook.svg","images/icons/twitter.svg","images/icons/weibo.svg","views/show_follow_bottom_sheet.html","views/info.html","views/skill.html","views/link.html","views/time_line.html"];angular.forEach(g,function(a){b.get(a,{cache:d})}),a.showFollowBottomSheet=function(a){e.show({templateUrl:"views/show_follow_bottom_sheet.html",controller:"ShowFollowBottomSheetCtrl",targetEvent:a})},a.toggleLeftNav=function(){f("left").toggle()},a.leftNavMenuClick=function(b){var d=a.menus[b];c.path(d.url),f("left").close()}}]),angular.module("cvApp").controller("ShowFollowBottomSheetCtrl",["$scope","$mdBottomSheet","$mdDialog",function(a,b,c){function d(a){var b=document.createElement("a");b.href=a,b.click()}a.items=[{name:"Blog",icon:"blogger",url:"http://blog.h4fan.com"},{name:"Github",icon:"github",url:"https://github.com/zewait"},{name:"Weibo",icon:"weibo",url:"http://www.weibo.com/u/1760989620"},{name:"Message",icon:"message",url:"sms:13726040351"},{name:"Mail",icon:"mail",url:"mailto:wait@h4fan.com"},{name:"FB",icon:"facebook",url:"https://www.facebook.com/profile.php?id=100005005471274"}],a.listItemClick=function(e,f){var g=a.items[e];console.dir(g),b.hide(e),g.url&&(-1!=g.url.indexOf("sms")?!device.desktop||device.iOS||device.android||device.windowsPhone?d(g.url):c.show(c.alert().title("当前设备不能发短信").content("请使用手机再试").ok("好").targetEvent(f)):-1!=g.url.indexOf("mailto")?d(g.url):window.open(g.url))}}]),angular.module("cvApp").controller("InfoCtrl",["$scope",function(a){}]),angular.module("cvApp").controller("SkillCtrl",["$scope",function(a){a.items=[{key:"Web开发",value:"Java/Node(io.js)/Python"},{key:"Web框架",value:"struts2/hibernate/spring/spring mvc/express/koa/flask"},{key:"前端框架",value:"Bootstrap/AngularJS/React/RequireJS/Browserify"},{key:"前端工具",value:"Bower/Grunt/Yo/Gulp/"},{key:"数据库相关",value:"Mysql/MongoDB/SQLite"},{key:"版本管理",value:"SVN/Git"},{key:"单元测试",value:"JUnit/Karma"},{key:"移动开发",value:"Android/NDK/React Native/Hybrld App/JQuery Mobile"},{key:"游戏开发",value:"Cocos2dx/Phaser"}]}]),angular.module("cvApp").controller("LinkCtrl",["$scope",function(a){a.items=[{key:"电话",value:"13726040351"},{key:"Email",value:"wait@h4fan.com"},{key:"QQ",value:"773108248"}]}]),angular.module("cvApp").controller("TimeLineCtrl",["$scope",function(a){a.items=[{title:"离职-appgether",time:"2015-4-3"},{title:"宾果水果",time:"2015-3",img:"images/time_line/binguo.jpeg",url:"http://www.wandoujia.com/apps/com.bingofresh.mobile.user"},{title:"今日家电",time:"2014-11",img:"images/time_line/jinri.jpeg",url:"http://www.wandoujia.com/apps/com.appgether.jrappliances"},{title:"Hyper Neuro",time:"2014-08",img:"images/time_line/hyperneuro.jpg",url:"http://app.appgether.com/hyperneuro"},{title:"全课网",time:"2014-02",img:"images/time_line/quanke.jpg",url:"http://app.appgether.com/coolschool"},{title:"鹰唛食品",time:"2014-02",img:"images/time_line/yingma.jpeg",url:"http://www.wandoujia.com/apps/com.appgether.android.yingma.activity"},{title:"2013年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）决赛二等奖",time:"2013-12"},{title:"公司网站多语言版",time:"2013-06",url:"http://www.appgether.com"},{title:"大专毕业",time:"2013-06-16"},{title:"android图片分享社交型应用",time:"2013-05",url:"https://github.com/zewait/PhotoShare-Client"},{title:"入职appgether",time:"2013-03-06"},{title:"2013年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）初赛广东省赛区一等奖",time:"2013-04"},{title:"小游戏对战平台(毕计)",time:"2012-12",content:"俄罗斯方块,贪食蛇,吃豆人,坦克大战的联网版;没用到游戏引擎,UDP/TCP通信"},{title:"灯饰网站",time:"2012-07"},{title:"2012年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）决赛二等奖",time:"2012-12"},{title:"2012年“蓝桥杯”全国软件专业人才设计与开发大赛JAVA软件开发（高职高专组）初赛广东省赛区一等奖",time:"2012-04"},{title:".....",time:"~"}],a.itemClick=function(b){var c=a.items[b];c.url&&window.open(c.url)}}]);