angular.module('ngMadLibs', ['ngMessages', 'ngAnimate'])
    .controller('mainController', function($scope){

        $scope.performFormSubmit = function(){
            if($scope.ngMadLibsForm.$valid){
                $scope.hideForm = true;
            }
        };

        $scope.resetValues = function(){
            $scope.hideForm = false;
            $scope.maleName='Michael';
            $scope.jobTitle='Programmer';
            $scope.tediousTask = 'Testing and Debugging';
            $scope.dirtyTask = 'Writing Hacks';
            $scope.uselessSkill= 'Talking to Clients';
            $scope.adjective='Awesome';
            $scope.obnoxiousCelebrity='Addy Osmani';
            $scope.hugeNumber= 1000;
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
            $scope.cleanForm();
            $scope.resetValues();
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