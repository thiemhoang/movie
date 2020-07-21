import angular from 'angular';
import RatingBar from './rating.bar.component';
import RatingBarController from './rating.bar.component';
import './rating.bar.scss';

export default function () {
    angular
        .module('movieApp')
        .controller('ratingBarController', RatingBarController)
        .component('ratingBar', RatingBar);
}
