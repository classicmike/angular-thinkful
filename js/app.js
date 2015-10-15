angular.module('instagramSearcher', ['ngMessages', 'ngAnimate'])
    .controller('mainController', function($scope){

        $scope.initValues = function() {
            $scope.resultsCount = 0;
            $scope.searchTerms = '';
            $scope.enteredTerms = '';
        };

        $scope.performSearch = function(){
            if($scope.instagramSearchForm.$valid){
                $scope.searchTerms = $scope.enteredTerms;
            }
        };

        $scope.requestSearchResults = function(){

        };

        $scope.initValues();


    })
    .filter('capsFirst', function(){
        return function(input){
            if(!input){
                return input;
            }
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });