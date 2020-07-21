import * as $ from 'jquery';
export default class CarouselController {
    constructor($scope) {
        this.activeIndex = 0;
        var ctr = this;
        $(function () {
            $('#carouselContainer').on('slide.bs.carousel', function ($event) {
                ctr.activeIndex = $event.to;
                var scope = angular.element($("#carouselContainer")).scope();
                scope.$apply(function(){
                    scope.activeIndex = $event.to;
                })
              });
        });

        $scope.$watch("carouselCtr.activeIndex", function(newValue, oldValue){
            if(newValue != oldValue){
                ctr.activeElement = ctr.slides[newValue];
            }
        });
    }
}

CarouselController.$inject = ['$scope'];