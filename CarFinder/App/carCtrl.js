(function () {
    angular.module('car-finder')
    .controller('carCtrl', ['$modal','carSvc', function ($modal, carSvc) {
        var self = this;

        this.selected = {
            year: '',
            make: '',
            name: '',
            trim: '',
        }

        this.options = {
            years: '',
            makes: '',
            models: '',
            trims: '',
        }

        this.cars = [];

        this.getYears = function () {
            carSvc.getYears().then(function (data) {
                self.options.years = data;
            })
        }
        this.getMakes = function () {
            self.selected.make = '';
            self.options.makes = '';
            self.selected.model = '';
            self.options.models = '';
            self.selected.trim = '';
            self.options.trims = '';

            self.cars = [];

            carSvc.getMakes(self.selected.year).then(function (data) {
                self.options.makes = data;
            })
            self.getCars();
        }
        this.getModels = function () {
            self.selected.model = '';
            self.options.models = '';
            self.selected.trim = '';
            self.options.trims = '';

            self.cars = [];

            carSvc.getModels(self.selected.year, self.selected.make).then(function (data) {
                self.options.models = data;
            })
            self.getCars();
        }
        this.getTrims = function () {
            self.selected.trim = '';
            self.options.trims = '';

            self.cars = [];

            carSvc.getTrims(self.selected.year, self.selected.make, self.selected.model)
                .then(function (data) {
                    self.options.trims = data;
                })
            self.getCars();
        }
        this.getCars = function () {
            self.cars = [];
            carSvc.getCars(self.selected.year, self.selected.make, self.selected.model, self.selected.trim)
                .then(function (data) {
                    self.cars = data;
                })
        }

        this.getYears();

        this.getCar = function (id) {
            $modal.open({
                templateUrl: '/App/templates/carModal.html',
                controller: 'carModalCtrl as mCtrl',
                size: 'lg',
                resolve: {
                    vm: function () {
                        return carSvc.getCar(id);
                    }
                }
            });
        }
    }])
    angular.module('ui.bootstrap').controller('carModalCtrl', function ($modalInstance, vm) {
        this.vm = vm;
        this.ok = function () {
            $modalInstance.close();
        };
    });
})();