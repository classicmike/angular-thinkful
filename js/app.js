angular.module('waitStaffCalculator', ['ngMessages', 'ngRoute'])
    .config('$routeProvider', '$locationProvider', function($routeProvider, $locaitonProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }).when('/new-meal', {
            templateUrl: 'views/new-meal.html',
            controller: 'NewMealController'
        }).when('/my-earnings', {
            templateUrl: 'my-earnings',
            controller: 'MyEarningsController'
        });

    }).controller('HomeController', function($scope){

    }).controller('NewMealController', function($scope){

    }).controller('MyEarningsController', function(){

    })

    .controller('mainController', function($scope){


        $scope.performFormSubmit = function(){
            if($scope.waitStaffCalculatorForm.$valid){
                //add all of the totals
                $scope.customerCharges.subTotal = (1 + $scope.meal.tax/100) * $scope.meal.baseMealPrice;
                $scope.customerCharges.tip = $scope.customerCharges.subTotal * ($scope.meal.tip/100);
                $scope.customerCharges.total = $scope.customerCharges.subTotal + $scope.customerCharges.tip;

                $scope.earnings.mealCount++;
                $scope.earnings.tipTotal += $scope.customerCharges.tip;
                $scope.earnings.total += $scope.customerCharges.total;

            }
        };

        $scope.resetForm = function(){
            $scope.init();
        };

        $scope.init = function(){
            $scope.meal = {
                baseMealPrice: 10,
                tax: 10,
                tip: 20
            };

            //customer charges
            $scope.customerCharges = {
                subTotal: 0.00,
                tip: 0.00,
                total: 0.00
            };

            //earnings
            $scope.earnings = {
                tipTotal: 0.00,
                mealCount: 0,
                total: 0.00
            };
        };

        $scope.init();




    })
    .filter('capsFirst', function(){
        return function(input){
            if(!input){
                return input;
            }

            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });