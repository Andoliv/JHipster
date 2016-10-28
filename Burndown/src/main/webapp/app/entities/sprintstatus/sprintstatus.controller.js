(function() {
    'use strict';

    angular
        .module('burndownApp')
        .controller('SprintstatusController', SprintstatusController);

    SprintstatusController.$inject = ['$scope', '$state', 'Sprintstatus'];

    function SprintstatusController ($scope, $state, Sprintstatus) {
        var vm = this;
        
        vm.sprintstatuses = [];

        loadAll();

        function loadAll() {
            Sprintstatus.query(function(result) {
                vm.sprintstatuses = result;
            });
        }
    }
})();
