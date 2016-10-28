(function() {
    'use strict';
    angular
        .module('burndownApp')
        .factory('Sprintstatus', Sprintstatus);

    Sprintstatus.$inject = ['$resource', 'DateUtils'];

    function Sprintstatus ($resource, DateUtils) {
        var resourceUrl =  'api/sprintstatuses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.statusDate = DateUtils.convertLocalDateFromServer(data.statusDate);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.statusDate = DateUtils.convertLocalDateToServer(data.statusDate);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.statusDate = DateUtils.convertLocalDateToServer(data.statusDate);
                    return angular.toJson(data);
                }
            }
        });
    }
})();
