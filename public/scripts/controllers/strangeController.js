myApp.controller('StrangeController', ['$scope', function($scope) {
    $scope.message = 'Doctor Strange!';
    $scope.quotes = {
        first: 'By the Hoary Hosts of Hoggoth!',
        second: 'By the Ageless Vishanti!',
        third: 'By the Shades of the Seraphim!'
    };
}]);