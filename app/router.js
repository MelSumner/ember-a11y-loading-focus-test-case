import Ember from 'ember';
import config from './config/environment';

let oldFocus = HTMLElement.prototype.focus;
HTMLElement.prototype.focus = function() {
  oldFocus.apply(this, ...arguments);
  console.log('Focusing', this.innerHTML);
};

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foo', function() {
    this.route('bar');
  });
});

export default Router;
