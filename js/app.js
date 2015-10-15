angular.module('instagramSearcher', ['ngMessages', 'ngAnimate'])
    .config(function($httpProvider){
        $httpProvider.defaults.useXDomain = true;
    })
    .controller('mainController', function($scope, $sce, $http){

        $scope.initValues = function() {
            $scope.resultsCount = 0;
            $scope.searchTerms = '';
            $scope.enteredTerms = '';
            $scope.searchResults = [];
        };

        $scope.trustSrc = function(src){
            console.log(src);
            return $sce.trustAsResourceUrl(src);
        };

        $scope.performSearch = function(){
            if($scope.instagramSearchForm.$valid){
                console.log('Need to perform a search');
                $scope.searchTerms = $scope.enteredTerms;
                $scope.requestSearchResults();
            }
        };

        $scope.requestSearchResults = function(){
            var apiUrl = $scope.TAG_SEARCH_URL.replace($scope.TAG_NAME_REPLACE, $scope.enteredTerms);

            $http({
                url: apiUrl,
                method: 'JSONP'
            }).then($scope.processResults.bind($scope),
                function(error){
                    console.log(error);
                    alert('Unfortunately there was an error with the function')
                });


        };

        $scope.processResults = function(results){
            $scope.searchResults = results.data.data;
            $scope.resultsCount = $scope.searchResults.length;

        };

        $scope.notifyErrors = function(errors){
            alert('Unfortunately there was an error in retrieving the images');
        };

        $scope.TAG_SEARCH_URL = 'https://api.instagram.com/v1/tags/{tag-name}/media/recent?access_token=1579983213.1677ed0.15fcc963b0a0465f9d4c34f6aac0d3a7&callback=JSON_CALLBACK';
        $scope.TAG_NAME_REPLACE = '{tag-name}';

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