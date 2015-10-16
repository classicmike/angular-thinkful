angular.module('ngMadLibs', ['ngMessages', 'ngAnimate'])
    .controller('mainController', function($scope){

        $scope.performFormSubmit = function(){
            if($scope.ngMadLibsForm.$valid){
                $scope.hideForm = true;
            }
        };

        $scope.fooBar = function(){
            $scope.hideForm = false;
            $scope.maleName= 'Mike';
            $scope.jobTitle= 'Programmer';
            $scope.tediousTask = 'Coding';
            $scope.dirtyTask = 'Mfdsfdsf';
            $scope.uselessSkill= 'Hacking';
            $scope.adjective='awesome';
            $scope.obnoxiousCelebrity='Remy Sharp';
            $scope.hugeNumber= 10000;
            $scope.gender = 'Male';



            //to reset must reset to untouched

        };

        $scope.init = function(){
            $scope.fooBar();
        };

        $scope.cleanForm = function(){
            $scope.ngMadLibsForm.$setPristine();
            $scope.ngMadLibsForm.$setUntouched();
        };

        $scope.resetForm = function(){
            $scope.cleanForm();
            $scope.fooBar();
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