angular.module('waitStaffCalculator', ['ngMessages'])
    .controller('mainController', function($scope){

        $scope.performFormSubmit = function(){

        };

        $scope.resetForm = function(){

        };

        $scope.init = function(){

        };



    })
    .filter('capsFirst', function(){
        return function(input){
            if(!input){
                return input;
            }

            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });