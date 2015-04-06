/* 
 * chapter4/controllers.js
 */
'use strict';

var helloWorldControllers =
  angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', 
  ['$scope', '$location', '$http',
  function MainCtrl($scope, $location, $http) {
    $scope.message = "Hello World";
}]);

helloWorldControllers.controller('ShowCtrl',
  ['$scope', '$location', '$http',
      function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show The World";
}]);

helloWorldControllers.controller('CustomerCtrl', ['$scope',
    function CustomerCtrl($scope) {
      $scope.customerName = "Bob's Burgers";
      $scope.customerNumber = "44522";
      
      $scope.changeCustomer = function() {
        $scope.customerName = $scope.cName;
        $scope.customerNumber = $scope.cNumber;
      };
}]);

helloWorldControllers.controller('AddCustomerCtrl',
 ['$scope', '$location',
 function AddCustomerCtrl($scope, $location) {
   $scope.submit = function(){
     console.log($scope.cName);
     $location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity);
   };
 }]);
 
 helloWorldControllers.controller('AddedCustomerCtrl', ['$scope', '$routeParams',
 function AddedCustomerCtrl($scope, $routeParams) {
   $scope.customerName = $routeParams.customer;
   $scope.customerCity = $routeParams.city;
   console.log($scope.customerName);
 }]);




