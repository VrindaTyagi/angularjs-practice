var demoApp = angular.module('demoApp', []);

function getFriendsData($scope) {
    $scope.friends = [
      { name: "Monica Geller", city: "Phoenix" },
      { name: "Rachel Green", city: "Chandler" },
      { name: "Pheobe Buffay", city: "Alanta" },
      { name: "Chandler Bing", city: "Phoenix" },
      { name: "Joey Tribianni", city: "Phoenix" },
      { name: "Ross Geller", city: "Phoenix" },
    ];
  }

  function getDetectivesData($scope) {
    $scope.detectives = [
      { name: "Jacob", city: "Phoenix" },
      { name: "Terry", city: "Chandler" },
      { name: "Charles", city: "Alanta" },
      { name: "Gina", city: "Phoenix" },
      { name: "Amy", city: "Phoenix" },
      { name: "Rose", city: "Phoenix" },
    ];
  }


  demoApp.config(function($routeProvider){
      $routeProvider.when('/', {
          controller: 'FriendsController',
            templateUrl: 'Partials/view1.html'
      })
      .when('/detectives', {
            controller: 'DetectivesController',
            templateUrl: 'Partials/view2.html'
      })
      .otherwise({redirectTo: '/'});
  })


  demoApp.controller('getFriendsData', getFriendsData);
  demoApp.controller('getDetectivesData', getDetectivesData);