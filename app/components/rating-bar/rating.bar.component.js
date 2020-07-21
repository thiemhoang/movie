
import controller from './rating.bar.controller';

const bindings = {
  score: '<'
};

export default {
  bindings: bindings,
  controller: controller,
  controllerAs: 'ratingCtr',
  template: require('./rating.bar.template.html'),
};

