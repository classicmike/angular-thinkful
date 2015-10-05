angular.module('ngMadLibs', ['ngMessages'])
    .controller('mainController', function($scope){
        $scope.maleName='';
        $scope.jobTitle='';
        $scope.tediousTask = '';
        $scope.dirtyTask = '';
        $scope.uselessSkill= '';
        $scope.adjective='';
        $scope.obnoxiousCelebrity='';
        $scope.hugeNumber='';
        $scope.gender = 'Male';

    })
    .filter('capsFirst', function(){
        return function(input){
            console.log(input);
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    });