(function () {
    angular.module('car-finder')
    .factory('carSvc', ['$http', function ($http) {
        var f = {};

        f.getYears = function () {
            return $http.post('/api/cars/GetYears').then(function (response) {
                return response.data;
            })
        }
        f.getMakes = function (year) {
            return $http.post('/api/cars/GetMakes', { year: year }).then(function (response) {
                return response.data;
            })
        }
        f.getModels = function (year, make) {
            return $http.post('/api/cars/GetModels', { year: year, make: make }).then(function (response) {
                return response.data;
            })
        }
        f.getTrims = function (year, make, model) {
            return $http.post('/api/cars/GetTrims', { year: year, make: make, model: model }).then(function (response) {
                return response.data;
            })
        }
        f.getCars = function (year, make, model, trim, filter) {
            return $http.post('/api/cars/GetCars', { year: year, make: make, model: model, trim: trim, filter: filter }).then(function (response) {
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