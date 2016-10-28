(function() {
    'use strict';

    angular
        .module('burndownApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'Sprint', '$http', '$resource'];


    function HomeController ($scope, Principal, LoginService, $state, Sprint, $http, $resource) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        vm.sprints = [];
        vm.sprintKey = null;
        /*
        var redmine = $resource('/api/redmine').get();
        $scope.redmineKey = redmine.$promise.then(function (data) {
        	var redmineUrl = "http://projetos.digilab.com.br/issues.json?project_id=20&query_id=21&key=eee4f080435b69de26b89acfac27030c77e5ae45"; 
        	$resource(redmineUrl).get().$promise.then(function (data) {
        		console.log(data.issues);
        	} );
        	return data.key;
        });
        */
        
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }
        
        loadAllSprint();
        
        function loadAllSprint(){
        	Sprint.query({}, onSuccess, onError);
        }
        
        function onSuccess(data, headers) {
            vm.sprints = data;
        }

        function onError(error) {
            AlertService.error(error.data.message);
        }
        
        // START - Angular Chart.js
        $scope.labels = ["16/08", "17/08", "18/08", "19/08", "20/08", "22/08", "23/08", "24/08", "25/08", "26/08"];
        $scope.series = ['Previsão', 'Atual'];
        $scope.data = [
            [20, 17.77, 15.55, 13.33, 11.11, 8.90, 6.66, 4.44, 2.22, 0],
            [20, 20, 20, 16, 13, 13, 10, 10, 10, 10]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis' }];
        $scope.options = {
            scales: {
              yAxes: [
                {
				  id: 'y-axis',
				  type: 'linear',
				  display: true,
				  position: 'left'
                }
              ]
            }
        };
        // END - Angular Chart.js
        
        $scope.printBurndown = 	function (sprint){
        	console.log(sprint);        	
        	alert("URL: " + sprint );
        };
        
        
    }
})();
