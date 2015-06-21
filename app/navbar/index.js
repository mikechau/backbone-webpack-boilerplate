import { ItemView } from 'backbone.marionette';
import template from './template.mustache';

const NavBarView = ItemView.extend({
  template: template,
  tagName: 'nav',

  attributes: {
    role: 'navigation'
  }
});

export default NavBarView;
