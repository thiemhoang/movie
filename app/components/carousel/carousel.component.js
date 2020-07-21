
import controller from './carousel.controller';

const bindings = {
  slides: '<'
};

export default {
  bindings: bindings,
  controller: controller,
  controllerAs: 'carouselCtr',
  template: require('./carousel.template.html'),
};

