(function() {
    'use strict';

    angular
        .module('burndownApp')
        .controller('SprintstatusDialogController', SprintstatusDialogController);

    SprintstatusDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Sprintstatus'];

    function SprintstatusDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Sprintstatus) {
        var vm = this;

        vm.sprintstatus = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.sprintstatus.id !== null) {
                Sprintstatus.update(vm.sprintstatus, onSaveSuccess, onSaveError);
            } else {
                Sprintstatus.save(vm.sprintstatus, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('burndownApp:sprintstatusUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.statusDate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
