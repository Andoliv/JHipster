(function() {
    'use strict';

    angular
        .module('burndownApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('sprintstatus', {
            parent: 'entity',
            url: '/sprintstatus',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'burndownApp.sprintstatus.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/sprintstatus/sprintstatuses.html',
                    controller: 'SprintstatusController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('sprintstatus');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('sprintstatus-detail', {
            parent: 'entity',
            url: '/sprintstatus/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'burndownApp.sprintstatus.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/sprintstatus/sprintstatus-detail.html',
                    controller: 'SprintstatusDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('sprintstatus');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Sprintstatus', function($stateParams, Sprintstatus) {
                    return Sprintstatus.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'sprintstatus',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('sprintstatus-detail.edit', {
            parent: 'sprintstatus-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprintstatus/sprintstatus-dialog.html',
                    controller: 'SprintstatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Sprintstatus', function(Sprintstatus) {
                            return Sprintstatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('sprintstatus.new', {
            parent: 'sprintstatus',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprintstatus/sprintstatus-dialog.html',
                    controller: 'SprintstatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                statusDate: null,
                                pointsResolved: null,
                                pointsRemaining: null,
                                issuesResolved: null,
                                idSprint: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('sprintstatus', null, { reload: true });
                }, function() {
                    $state.go('sprintstatus');
                });
            }]
        })
        .state('sprintstatus.edit', {
            parent: 'sprintstatus',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprintstatus/sprintstatus-dialog.html',
                    controller: 'SprintstatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Sprintstatus', function(Sprintstatus) {
                            return Sprintstatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('sprintstatus', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('sprintstatus.delete', {
            parent: 'sprintstatus',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprintstatus/sprintstatus-delete-dialog.html',
                    controller: 'SprintstatusDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Sprintstatus', function(Sprintstatus) {
                            return Sprintstatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('sprintstatus', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
