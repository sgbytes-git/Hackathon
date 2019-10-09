var app = angular.module("Kerboresclan_UI", ['ngAnimate', 'ngTouch', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider',

function config($locationProvider, $routeProvider)  {
  $routeProvider.
    when('/main', { template: '<main-page></main-page>'}).
    when('/dashboard', { template: '<dashboard-page></dashboard-page>'}).
    otherwise('/main');
}

]);

app.controller("Controller1", function($scope, $http, $window, $location)  {
  $scope.message = "Hello, AngularJS";
  $scope.loginpage = {};	

  $scope.signIn = function() {
  
    $http({
      method: "GET",
      url: 'https://pythonflaskapp123.azurewebsites.net/login?userName=' + $scope.loginpage.userName + '&password=' + $scope.loginpage.password,
      headers: {'Content-Type': 'application/json;charset=UTF-8'}//,
      //data: { userName: $scope.loginpage.userName, password: $scope.loginpage.password}
   }).success(function(response) {
        $scope.authenticate = response.response.authenticate;
        alert('Message from server: ' + $scope.authenticate);
        //$window.location.href = '/dashboard.html';

        if ($scope.authenticate == false) {
          alert('Not Authenticated. Either UserName doesnt exist or Password is incorrect.');
          return;
        }

        $location.path('/dashboard');
    }).error(function(response) {
      alert('Error');
    });
  }

  


}); 