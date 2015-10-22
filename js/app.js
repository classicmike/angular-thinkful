angular.module('waitStaffCalculator', ['ngMessages', 'ngRoute'])
    .value('meal', {
        baseMealPrice: 10,
        tax: 10,
        tip: 20
    }).value('customerCharges', {
        subTotal: 0.00,
        tip: 0.00,
        total: 0.00
    }).value('earnings', {
        tipTotal: 0.00,
        mealCount: 0,
        total: 0.00
    })
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController as home'
        }).when('/new-meal/:reset?', {
            templateUrl: 'views/new-meal.html',
            controller: 'NewMealController as newMeal',
            resolve: {
                reset: function($route){
                    var reset = $route.current.params.reset;
                    var resetFlag = false;

                    if(typeof reset !== 'undefined' && reset === 'reset'){
                        resetFlag = true;
                    }

                    return resetFlag;
                }
            }
        }).when('/my-earnings', {
            templateUrl: 'views/my-earnings.html',
            controller: 'MyEarningsController as myEarnings'
        }).when('/not-found', {
            templateUrl: 'views/error.html',
            controller: 'NotFoundController'
        }).otherwise('/not-found');
    }])
    .controller('HomeController', function(){
        this.welcomeText = 'Hello and welcome to the wait staff calculator. Please enter your figures and the calculator will perform';
        this.title = 'Homepage';
    }).controller('NewMealController', function(meal, customerCharges, earnings, $scope, reset){
        this.resetValues = function(){

            var initialMeal = {
                baseMealPrice: 10,
                tax: 10,
                tip: 20
            };

            meal = initialMeal;

            var initialCustomerCharges = {
                subTotal: 0.00,
                tip: 0.00,
                total: 0.00
            };

            customerCharges = initialCustomerCharges;

            var initialEarnings = {
                tipTotal: 0.00,
                mealCount: 0,
                total: 0.00
            };

            earnings = initialEarnings;

        };

        this.initValues = function(toReset){
            if(toReset){
                this.resetValues();
            }

            this.meal = meal;
            this.customerCharges = customerCharges;

        };

        this.performSubmit = function(){
            if(this.waitStaffCalculatorForm.$valid){

                //calculate the numbers
                this.customerCharges.subTotal = (1 + this.meal.tax/100) * this.meal.baseMealPrice;
                this.customerCharges.tip = this.customerCharges.subTotal * (this.meal.tip/100);
                this.customerCharges.total = this.customerCharges.subTotal + this.customerCharges.tip;

                earnings.mealCount++;
                earnings.tipTotal += this.customerCharges.tip;
                earnings.total += this.customerCharges.total;

            }
        };

        this.performReset = function(resetFlag){
            this.initValues(resetFlag);
        };

        //initialize this controller
        this.initValues(reset);

    }).controller('MyEarningsController', function(earnings){
        this.earnings = earnings;
    }).controller('NotFoundController', function(){

    })
    .filter('capsFirst', function(){
        return function(input){
            if(!input){
                return input;
            }
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });