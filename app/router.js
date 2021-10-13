import EmberRouter from '@ember/routing/router';
import config from 'web-chat/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Person1', { path: '/person1' });
  this.route('Person2', { path: '/person2' });
  this.route('Person3', { path: '/person3' });
  this.route('Person4', { path: '/person4' });
});
