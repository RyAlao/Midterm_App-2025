var app = angular.module('myApp', []);

app.controller('sampleController', function($scope, $http) {
    // Perform the GET request to Spring Boot API
    $http.get('/api/message')
    .then(function(response) {
        
        console.log('API Response:', response);
        $scope.welcomeMessage = response.data;
    }, function(error) {
        // Log any error if the request fails
        console.error('Error fetching welcome message:', error);
        $scope.welcomeMessage = 'Error fetching message';
    });
});
