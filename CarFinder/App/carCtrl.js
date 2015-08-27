(function () {
    angular.module('car-finder')
    .controller('carCtrl', ['$scope','$modal','carSvc', function ($scope, $modal, carSvc) {
        var self = this;
        this.selected = {
            year: '',
            make: '',
            model: '',
            trim: '',
            filter: '',
            paging: true,
            page: 0,
            perPage: 10
        }

        this.options = {
            years: '',
            makes: '',
            models: '',
            trims: '',
        }

        this.cars = [];
        this.totalCarsCount = 0;

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

            carSvc.getMakes(self.selected).then(function (data) {
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

            carSvc.getModels(self.selected).then(function (data) {
                self.options.models = data;
            })
            self.getCars();
        }
        this.getTrims = function () {
            self.selected.trim = '';
            self.options.trims = '';

            self.cars = [];

            carSvc.getTrims(self.selected)
                .then(function (data) {
                    self.options.trims = data;
                })
            self.getCars();
        }
        this.getCars = function () {
            self.cars = [];
            carSvc.getCars(self.selected)
                .then(function (data) {
                    self.cars = data;
                });
            carSvc.getCarsCount(self.selected).then(function (data) {
                self.totalCarsCount = data;
            });
            console.log(self.cars)
        }

        $scope.mySelectedItems = [];
        $scope.$watchCollection("mySelectedItems", function () {
            if($scope.mySelectedItems.length == 1)
                self.getCar($scope.mySelectedItems[0].id)
        });

        this.getYears();

        this.getCar = function (id) {
            $modal.open({
                templateUrl: '/App/templates/carModal.html',
                controller: 'carModalCtrl as mCtrl',
                size: 'md',
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