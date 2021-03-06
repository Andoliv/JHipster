(function() {
    'use strict';

    angular
        .module('burndownApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('sprint', {
            parent: 'entity',
            url: '/sprint',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'burndownApp.sprint.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/sprint/sprints.html',
                    controller: 'SprintController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('sprint');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('sprint-detail', {
            parent: 'entity',
            url: '/sprint/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'burndownApp.sprint.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/sprint/sprint-detail.html',
                    controller: 'SprintDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('sprint');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Sprint', function($stateParams, Sprint) {
                    return Sprint.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'sprint',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('sprint-detail.edit', {
            parent: 'sprint-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprint/sprint-dialog.html',
                    controller: 'SprintDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Sprint', function(Sprint) {
                            return Sprint.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('sprint.new', {
            parent: 'sprint',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprint/sprint-dialog.html',
                    controller: 'SprintDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                idProject: null,
                                idQuery: null,
                                startDate: null,
                                endDate: null,
                                totalPoints: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('sprint', null, { reload: true });
                }, function() {
                    $state.go('sprint');
                });
            }]
        })
        .state('sprint.edit', {
            parent: 'sprint',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprint/sprint-dialog.html',
                    controller: 'SprintDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Sprint', function(Sprint) {
                            return Sprint.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('sprint', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('sprint.delete', {
            parent: 'sprint',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/sprint/sprint-delete-dialog.html',
                    controller: 'SprintDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Sprint', function(Sprint) {
                            return Sprint.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('sprint', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
