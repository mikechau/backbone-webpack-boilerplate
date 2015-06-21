import { LayoutView } from 'backbone.marionette';
import template from './layout.mustache';
import NavbarView from '../navbar';

const BaseLayout = LayoutView.extend({
  el: '#main',

  template: template,

  regions: {
    navbar: '#app_navbar',
    content: '#app_content'
  },

  onRender() {
    this.getRegion('navbar').show(new NavbarView());
  }
});

export default BaseLayout;
