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
        }).when('/new-meal', {
            templateUrl: 'views/new-meal.html',
            controller: 'NewMealController as newMeal',
            resolve: {

            }
        });
    }])
    .controller('HomeController', function(){
        this.welcomeText = 'Hello and welcome to the wait staff calculator. Please enter your figures and the calculator will perform';
        this.title = 'Homepage';
    }).controller('NewMealController', function(meal, customerCharges, earnings){
        this.resetValues = function(){
            /*meal.baseMealPrice = 10;
            meal.tip = 10;
            meal.tax = 20;

            customerCharges.subTotal = 0.00;
            customerCharges.tip = 0.00;
            customerCharges.total = 0.00;

            earnings.tipTotal = 0.00;
            earnings.mealCount = 0;
            earnings.total = 0.00;*/

        };

        this.initValues = function(){
            this.meal = meal;
            this.customerCharges = customerCharges;
        };

        this.performSubmit = function(){

        };


        this.initValues();

    })
    .filter('capsFirst', function(){
        return function(input){
            if(!input){
                return input;
            }

            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });