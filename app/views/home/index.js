import angular from 'angular';
import HomeController from './home.controller';
import HomeService from './home.service';
import route from './home.route';
import './home.scss';

export default function() {
    angular
    .module('movieApp')
    .controller('homeController', HomeController)
    .config(route)
    .service('homeService', HomeService);
} 
