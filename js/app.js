angular.module('ngForms', ['ngMessages'])
    .controller('FormController', function($scope){
        $scope.submit = function(){
            if($scope.myForm.$valid){
                console.log('The form is valid');
            } else {
                console.log('The form is invalid');
            }
        }
    });
