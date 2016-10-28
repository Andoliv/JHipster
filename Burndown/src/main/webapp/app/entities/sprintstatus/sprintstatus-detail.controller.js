(function() {
    'use strict';

    angular
        .module('burndownApp')
        .controller('SprintstatusDetailController', SprintstatusDetailController);

    SprintstatusDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Sprintstatus'];

    function SprintstatusDetailController($scope, $rootScope, $stateParams, previousState, entity, Sprintstatus) {
        var vm = this;

        vm.sprintstatus = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('burndownApp:sprintstatusUpdate', function(event, result) {
            vm.sprintstatus = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
