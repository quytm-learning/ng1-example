(function () {
    'use strict';

    angular.module('app.service')
        .factory('StorageService', storageService);

    function storageService(localStorageService) {
        return {
            setData: setData,
            getData: getData,
            clearAllData: clearAllData
        };

        function setData(data) {
            return localStorageService.set('data', data);
        }

        function getData() {
            return localStorageService.get('data');
        }

        function clearAllData() {
            return localStorageService.clearAll();
        }
    }

})();