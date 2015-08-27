(function () {
    angular.module('car-finder')
    .factory('carSvc', ['$http', function ($http) {
        var f = {};

        f.getYears = function () {
            return $http.post('/api/cars/GetYears').then(function (response) {
                return response.data;
            })
        }
        f.getMakes = function (options) {
            return $http.post('/api/cars/GetMakes', options).then(function (response) {
                return response.data;
            })
        }
        f.getModels = function (options) {
            return $http.post('/api/cars/GetModels', options).then(function (response) {
                return response.data;
            })
        }
        f.getTrims = function (options) {
            return $http.post('/api/cars/GetTrims', options).then(function (response) {
                return response.data;
            })
        }
        f.getCars = function (options) {
            return $http.post('/api/cars/GetCars', options).then(function (response) {
                return response.data;
            })
        }
        f.getCarsCount = function (options) {
            return $http.post('/api/cars/GetCarsCount', options).then(function (response) {
                return response.data;
            })
        }
        f.getCar = function (id) {
            return $http.post('/api/cars/getCar', id).then(function (response) {
                return response.data;
            })
        }
        return f;
    }])
})();