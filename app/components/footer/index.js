import angular from 'angular';
import Footer from './footer.component';
import './footer.scss';

export default function () {
    angular
        .module('movieApp')
        .component('footer', Footer);
}
