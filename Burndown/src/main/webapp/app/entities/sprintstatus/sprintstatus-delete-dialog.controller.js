(function() {
    'use strict';

    angular
        .module('burndownApp')
        .controller('SprintstatusDeleteController',SprintstatusDeleteController);

    SprintstatusDeleteController.$inject = ['$uibModalInstance', 'entity', 'Sprintstatus'];

    function SprintstatusDeleteController($uibModalInstance, entity, Sprintstatus) {
        var vm = this;

        vm.sprintstatus = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Sprintstatus.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
