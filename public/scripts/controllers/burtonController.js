myApp.controller('BurtonController', ['$scope', function($scope) {
    $scope.message = 'Jack Burton!';
    $scope.quotes = {
        first: 'Son of a bitch must pay!',
        second: 'Are you crazy... Is that your problem?',
        third: 'Okay. You people sit tight, hold the fort and keep the home fires burning. And if ' +
        'we\'re not back by dawn... call the president.'
    };
}]);