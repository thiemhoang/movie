import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import './app.scss';
import view from './views';
import component from './components'
import 'bootstrap';

import directive from './directives';

angular.module('movieApp', [uirouter])
.config(routing);

view();

component();

directive();

