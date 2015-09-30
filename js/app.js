angular.module('ngMadLibs', [])
.filter('capsFirst', function(){
    return function(input){
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
});