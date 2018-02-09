import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Promise((r)=> {
      setTimeout(r, 1000);
    });
  }
});
