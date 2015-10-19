angular.module('OWMApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).when('/cities/:city', {
            templateUrl: 'views/city.html',
            controller: 'CityCtrl',
            resolve: {
                city: function(owmCities, $route, $location){
                    var city = $route.current.params.city;

                    city = city.replace('_' ,' ');

                    if(owmCities.indexOf(city) === -1){
                        $location.path('/error');
                        return;
                    }

                    return city;
                }
            }
        }).when('/error', {
            template: '<p>Error- Page not found</p>'
        })

    }])
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .controller('HomeCtrl', function($scope){
        //insert the controller code here


    }).controller('CityCtrl', ['$scope', 'owmCities', function($scope, city){
        //insert the controller code here


        $scope.city = city;

    }])
    .filter('capsFirst', function(){
        return function(input){
            if(!input){
                return input;
            }
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });