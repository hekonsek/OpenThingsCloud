'use strict';

describe('Controllers Tests ', function () {

    beforeEach(module('zedpanelApp'));

    describe('MainController', function () {
        var $scope;


        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('MainController', {$scope: $scope});
        }));

        it('should display home page controller', function () {
            expect($scope.isDisplayed).toBeTruthy();
        });
    });
});
