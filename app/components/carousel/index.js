import angular from 'angular';
import Carousel from './carousel.component';
import CarouselController from './carousel.controller';
import './carousel.scss';

export default function () {
    angular
        .module('movieApp')
        .controller('carouselController', CarouselController)
        .component('carousel', Carousel);
}
