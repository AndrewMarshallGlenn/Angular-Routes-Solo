myApp.controller('HondaController', ['$scope', function($scope) {
    $scope.message = 'Edmond Honda!';
    $scope.quotes = {
        first: 'See that? I\'m glorious!',
        second: 'Man, I\'m starving! I could go for some chanko stew!',
        third: 'I like the cut of your jib, fella. You just need a bit more muscle mass.'
    };
}]);