angular.module('OWMApp', ['ngRoute', 'ngAnimate'])
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl as home'
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
    .controller('HomeCtrl', function($scope){
        //insert the controller code here

        this.welcomeMessage = 'Welcome Home';

    }).controller('CityCtrl', ['$scope', 'city', function($scope, city){
        //insert the controller code here
        $scope.city = city;

    }])
    .run(function($rootScope, $location, $timeout){
        $rootScope.$on('$routeChangeError', function(){
            $location.path('/error');
        });

        $rootScope.$on('$routeChangeStart', function(){
            $rootScope.isLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function(){
            $timeout(function(){
                $rootScope.isLoading = false;
            }, 1000);
        })
    })
    .filter('capsFirst', function(){
        return function(input){
            if(!input){
                return input;
            }
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });