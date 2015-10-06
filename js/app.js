angular.module('ngMadLibs', ['ngMessages'])
    .controller('mainController', function($scope){

        $scope.performFormSubmit = function(){
            if($scope.ngMadLibsForm.$valid){
                $scope.hideForm = true;
            }
        };

        $scope.resetValues = function(){
            $scope.hideForm = false;
            $scope.maleName='';
            $scope.jobTitle='';
            $scope.tediousTask = '';
            $scope.dirtyTask = '';
            $scope.uselessSkill= '';
            $scope.adjective='';
            $scope.obnoxiousCelebrity='';
            $scope.hugeNumber='';
            $scope.gender = 'Male';

            //to reset must reset to untouched

        };

        $scope.init = function(){
            $scope.resetValues();
        };

        $scope.cleanForm = function(){
            $scope.ngMadLibsForm.$setPristine();
            $scope.ngMadLibsForm.$setUntouched();
        };

        $scope.resetForm = function(){
            $scope.resetValues();
            $scope.cleanForm();
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