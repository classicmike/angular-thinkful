angular.module('ngMadLibs', [])
    .controller('mainController', function($scope){
        $scope.hideForm = false;
        $scope.maleName='Michael';
        $scope.jobTitle='programmer';
        $scope.tediousTask = 'Managing Clients';
        $scope.dirtyTask = 'Creating Quotes';
        $scope.uselessSkill= 'Client Management';
        $scope.adjective='awesome';
        $scope.obnoxiousCelebrity='Mike';
        $scope.hugeNumber='10000';
        $scope.gender = 'Male';

        $scope.performFormSubmit = function(){
        };
    })
    .filter('capsFirst', function(){
        return function(input){
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });